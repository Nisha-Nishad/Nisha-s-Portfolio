import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export async function submitContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (supabase) {
    const { error } = await supabase.from('contacts').insert([data]);
    if (error) {
      console.warn('Supabase submission error:', error);
      throw error;
    }
    return { success: true, savedToDb: true };
  }
  // If Supabase credentials are not provided yet, fallback gracefully
  return { success: true, savedToDb: false };
}
