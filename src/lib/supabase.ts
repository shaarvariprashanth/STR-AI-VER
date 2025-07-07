import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://bmxgrdivfxpdstkjdfhd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteGdyZGl2ZnhwZHN0a2pkZmhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NzkzMDQsImV4cCI6MjA2NzM1NTMwNH0.II9fmpVw89N8UDJ8eX8FMWK_ebx633rYfZyQsU0I_q0";


export const supabase = createClient(supabaseUrl, supabaseKey);
