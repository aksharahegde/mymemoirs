import { serverSupabaseUser, serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const id = parseInt(event?.context?.params?.id) as number;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }
  const user = await serverSupabaseUser(event);
  if (!user) {
    throw createError({ statusMessage: "Unauthenticated" });
  }
  const client = await serverSupabaseClient<any>(event);
  const { data, error } = await client
    .from("notes")
    .select()
    .eq("user_id", user?.id)
    .eq("id", id)

  if (error) {
    throw createError({ statusMessage: error.message });
  }

  return data.length ? data[0] : null;
});
