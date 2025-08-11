import { serverSupabaseClient } from '#supabase/server'
import type { H3Event } from "h3";

export const useSupabase = async (event: H3Event) => {
  const client = await serverSupabaseClient(event)


  return { supabase: client }
}