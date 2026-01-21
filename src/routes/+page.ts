import { DB } from "$lib/DB";

export async function load() {
  const resepte = await DB.Resep.getAll();

  return { resepte };
}
