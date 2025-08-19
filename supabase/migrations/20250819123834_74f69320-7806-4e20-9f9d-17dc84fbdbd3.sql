-- Create message_responses table for storing responses to contact submissions
CREATE TABLE public.message_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_submission_id UUID NOT NULL REFERENCES public.contact_submissions(id) ON DELETE CASCADE,
  response_message TEXT NOT NULL,
  response_sent_at TIMESTAMP WITH TIME ZONE,
  sent_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.message_responses ENABLE ROW LEVEL SECURITY;

-- Create policies for message responses
CREATE POLICY "Authenticated users can view all message responses" 
ON public.message_responses 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

CREATE POLICY "Authenticated users can create message responses" 
ON public.message_responses 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated'::text);

CREATE POLICY "Authenticated users can update message responses" 
ON public.message_responses 
FOR UPDATE 
USING (auth.role() = 'authenticated'::text);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_message_responses_updated_at
  BEFORE UPDATE ON public.message_responses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance on foreign key lookups
CREATE INDEX idx_message_responses_contact_submission_id 
ON public.message_responses(contact_submission_id);