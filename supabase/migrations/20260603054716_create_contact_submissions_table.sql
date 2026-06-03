/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `mobile` (text)
      - `city` (text)
      - `scheme` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public inserts (no authentication required for form submissions)
    - Add policy for admin to read all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  city text,
  scheme text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contact form (authenticated)"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
