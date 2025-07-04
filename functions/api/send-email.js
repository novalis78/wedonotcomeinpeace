export async function onRequestPost(context) {
  const { request, env } = context;
  
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { email, type, message } = await request.json();
    
    // Determine email content based on type
    const emailContent = type === 'preorder' 
      ? {
          subject: 'New Pre-Order Interest: We Do Not Come In Peace',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #050508 0%, #0a0a0f 100%); color: #fff; padding: 40px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; color: #00ff7f;">Pre-Order Request Received</h1>
              </div>
              <div style="padding: 40px; background: #f5f5f5;">
                <p style="color: #333; font-size: 16px;"><strong>Email:</strong> ${email}</p>
                <p style="color: #666; font-size: 14px;">Someone is interested in pre-ordering "We Do Not Come In Peace: The Oumuamua Protocol"</p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #999; font-size: 12px;">Sent from wedonotcomeinpeace.com</p>
              </div>
            </div>
          `
        }
      : {
          subject: 'Contact Form: We Do Not Come In Peace',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #050508 0%, #0a0a0f 100%); color: #fff; padding: 40px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; color: #00ff7f;">New Contact Message</h1>
              </div>
              <div style="padding: 40px; background: #f5f5f5;">
                <p style="color: #333; font-size: 16px;"><strong>From:</strong> ${email}</p>
                <p style="color: #333; font-size: 16px;"><strong>Message:</strong></p>
                <p style="color: #666; font-size: 14px; white-space: pre-wrap;">${message || 'No message provided'}</p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #999; font-size: 12px;">Sent from wedonotcomeinpeace.com</p>
              </div>
            </div>
          `
        };
    
    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'We Do Not Come In Peace <info@speakmypdf.com>',
        to: ['novalis78@gmail.com'],
        subject: emailContent.subject,
        html: emailContent.html,
        reply_to: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}