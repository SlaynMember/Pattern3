/*
  # Create consultation bookings table

  1. New Tables
    - `consultation_bookings`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `business_name` (text, optional)
      - `industry` (text)
      - `help_with` (text)
      - `current_challenges` (text)
      - `preferred_time` (text, optional)
      - `hear_about` (text, optional)
      - `source_page` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consultation_bookings` table
    - Add policy for public insert (form submissions)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  business_name text,
  industry text NOT NULL,
  help_with text,
  current_challenges text NOT NULL,
  preferred_time text,
  hear_about text,
  source_page text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation bookings (for form submissions)
CREATE POLICY "Anyone can submit consultation bookings"
  ON consultation_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to read their own consultation bookings
CREATE POLICY "Users can read their own consultation bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');