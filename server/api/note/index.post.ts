import { serverSupabaseUser, serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) {
    throw createError({ statusMessage: "Unauthenticated" });
  }
  const client = await serverSupabaseClient<any>(event);

  const body = await readBody(event);
  const payload = {
    ...body,
    user_id: user.id
  }
  const { data, error } = await client.from("notes").insert([payload]).select();
  if (error) {
    console.log(error)
    throw createError({ statusMessage: error.message });
  }

  return data;
});
