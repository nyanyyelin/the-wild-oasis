import supabase from './supabase';

export const signup = async ({ fullName, email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
};
export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data; // this return session and user data
};

export const getCurrentUser = async () => {
  // get current session for the localStorage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // getUser() just return session.user
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data; // this return user: {}
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export const updateCurrentUser = async ({ fullName, password, avatar }) => {
  // 1. Update password OR fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = supabase.storage
    .from('avatars')
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: avatarError } =
    await supabase.auth.updateUser({
      data: {
        // URL from supabase storage bucket
        avatar: `https://rpfmpxahnhyfovucplbt.supabase.co/storage/v1/object/public/avatars//${fileName}`,
      },
    });

  if (avatarError) throw new Error(avatarError.message);

  return updatedUser;
};
