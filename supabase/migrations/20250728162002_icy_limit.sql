/*
  # Update webhook trigger for P3 Website Lead Intake

  1. Database Changes
    - Drop existing "Supa Make" trigger
    - Create new "P3 Website Lead Intake" trigger with updated webhook URL
    - Remove API key header as webhook secret was deleted

  2. Webhook Configuration
    - New URL: https://hook.us2.make.com/zgkvs45vqvwtfwq2nu8qhorcd4ctyfr8
    - Method: POST
    - Content-Type: application/json
    - No authentication headers

  3. Notes
    - Trigger fires on INSERT to consultation_bookings table
    - Sends complete row data to Make.com webhook
    - 5 second timeout maintained for reliability
*/

-- Drop the existing trigger
DROP TRIGGER IF EXISTS "Supa Make" ON public.consultation_bookings;

-- Create new trigger with updated webhook URL and no API key
CREATE TRIGGER "P3 Website Lead Intake"
  AFTER INSERT ON public.consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION supabase_functions.http_request(
    'https://hook.us2.make.com/zgkvs45vqvwtfwq2nu8qhorcd4ctyfr8',
    'POST',
    '{"Content-type":"application/json"}',
    '{}',
    '5000'
  );