import { serverSupabaseUser, serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) {
    throw createError({ statusMessage: "Unauthenticated" });
  }
  const client = await serverSupabaseClient<any>(event);
  const { data, error } = await client
    .from("notes")
    .select()
    .eq("user_id", user?.id)
    .order("created_at");

  if (error) {
    throw createError({ statusMessage: error.message });
  }

  console.log("data", data);
  return data;
});
