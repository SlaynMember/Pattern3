import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ConsultationBooking = {
  id?: string
  full_name: string
  email: string
  business_name?: string
  industry: string
  help_with?: string
  current_challenges: string
  preferred_time?: string
  hear_about?: string
  source_page?: string
  created_at?: string
}