import supabase, { supabaseUrl } from './supabase';
export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error);
    throw new Error('Cabins could not be loaded.');
  }
  return data;
};

export const creatEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    '',
  );

  // if we don't replace '/', supabase is going to create a new folder
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create/edit  cabin
  let query = supabase.from('cabins'); // no need to 'await' here
  // A) create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) update cabin, just an object, not array
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single(); // access immediately created data, otherwise data is empty

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be created.');
  }
  // 2. upload the image

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. prevent new file being created if image not uploaded properly
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
  }
  return data;
};

export const deleteCabins = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be deleted.');
  }
  return data;
};
