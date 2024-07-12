import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lskvpesrcehbhtxqbpaj.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxza3ZwZXNyY2VoYmh0eHFicGFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxODk0MTEsImV4cCI6MjAzNTc2NTQxMX0.wmdQ2CPp2Kz0X6AZXCizeS91dfRibz_2KM8uQrDf03g`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
