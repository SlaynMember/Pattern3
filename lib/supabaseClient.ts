import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-preview-safe-url.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-preview-safe-anon-key'

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables missing — running in Bolt preview?')
}

// If using preview defaults, you can optionally use a local testing project
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
