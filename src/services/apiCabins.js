import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  return cabins;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error(`You can't remove`);
  return data;
}

export async function createCabin(newCabin) {
  const imgName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imgPath = `${supabaseUrl}/storage/v1/object/public/cabins/${imgName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imgPath }])
    .select();

  if (error) throw new Error("Failed to create a cabin");

  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imgName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", newCabin.id);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}
