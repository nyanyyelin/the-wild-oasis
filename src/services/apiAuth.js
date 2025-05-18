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
  console.log('getCurrentUser', data);
  if (error) throw new Error(error.message);
  return data; // this return user: {}
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};
