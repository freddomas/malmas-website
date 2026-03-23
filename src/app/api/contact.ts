import { useState } from 'react';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Implémenter l'envoi d'email via SMTP
    // const transporter = await getEmailTransporter();
    // await transporter.sendMail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: email,
    //   subject: `Nouvelle demande de contact - ${company || 'N/A'}`,
    //   html: `
    //     <h2>Nouvelle demande de contact MALMAS</h2>
    //     <p><strong>Nom:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Entreprise:</strong> ${company || 'Non spécifié'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    console.log('Contact form submission:', { name, email, company, message });

    return new Response(
      JSON.stringify({ message: 'Message reçu avec succès' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ message: 'Erreur lors du traitement' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
