import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Connect to MongoDB
    const client = new MongoClient()
    const mongoUri = Deno.env.get('MONGODB_CONNECTION_STRING')
    
    if (!mongoUri) {
      console.error('MongoDB connection string not found')
      return new Response(
        JSON.stringify({ error: 'Database configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    await client.connect(mongoUri)
    const db = client.database('portfolio')
    const collection = db.collection('contact_submissions')

    // Insert the contact submission
    const submission = {
      name,
      email,
      subject,
      message,
      created_at: new Date(),
    }

    const result = await collection.insertOne(submission)
    console.log('Contact submission saved:', result.insertedId)

    await client.close()

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.',
        id: result.insertedId
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error saving contact submission:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to save message. Please try again.',
        details: error.message
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})