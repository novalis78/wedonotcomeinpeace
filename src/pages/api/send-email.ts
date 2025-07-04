import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend('re_mLyGv4BU_8VNmCw7iUH4ov5EuzqLPGEpd');

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, type, message } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let subject = '';
    let emailContent = '';

    if (type === 'preorder') {
      subject = 'New Pre-Order: We Do Not Come In Peace';
      emailContent = `
        <h2>New Pre-Order Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>A reader has expressed interest in pre-ordering "We Do Not Come In Peace: The Oumuamua Protocol".</p>
        <p>Please add them to the pre-order notification list.</p>
      `;
    } else if (type === 'contact') {
      subject = 'Contact from We Do Not Come In Peace Website';
      emailContent = `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: 'We Do Not Come In Peace <info@speakmypdf.com>',
      to: 'novalis78@gmail.com',
      subject: subject,
      html: emailContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};