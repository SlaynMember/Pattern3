/*
  # Create roadmap bookings table

  1. New Tables
    - `roadmap_bookings`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, required)
      - `industry` (text, required)
      - `team_size` (text, required)
      - `current_challenges` (text, required)
      - `ai_experience` (text, required)
      - `timeline` (text, required)
      - `budget` (text, required)
      - `additional_info` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `roadmap_bookings` table
    - Add policy for public insert (form submissions)
    - Add policy for authenticated users to read their own submissions
*/

CREATE TABLE IF NOT EXISTS roadmap_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  industry text NOT NULL,
  team_size text NOT NULL,
  current_challenges text NOT NULL,
  ai_experience text NOT NULL,
  timeline text NOT NULL,
  budget text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE roadmap_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for form submissions)
CREATE POLICY "Anyone can submit roadmap booking"
  ON roadmap_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to read their own submissions (if they're authenticated)
CREATE POLICY "Users can read their own bookings"
  ON roadmap_bookings
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_roadmap_bookings_updated_at
    BEFORE UPDATE ON roadmap_bookings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();