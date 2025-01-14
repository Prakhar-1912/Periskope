import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lmudojyfnbpuuqbvjvog.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtdWRvanlmbmJwdXVxYnZqdm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MzM5MTAsImV4cCI6MjA1MjQwOTkxMH0.Pprn59tpcNyuMIRdzNEmZK0LH6tw8TWGBn9fAU43XfY'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
