import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Verify a custom header so only Supabase can call this
    const authHeader = req.headers.get('Authorization');
    if (authHeader !== `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { record } = body; // Supabase sends the inserted row in 'record'
    const email = record.email;
    const name = record.full_name || 'there';

    if (email) {
      await resend.emails.send({
        from: 'Welcome <onboarding@resend.dev>', // Update with your verified domain in production
        to: email,
        subject: 'Welcome to our SaaS platform!',
        html: `
          <div>
            <h1>Welcome ${name}!</h1>
            <p>We're excited to have you on board. Our platform gives you everything you need to succeed.</p>
            <p>Head over to your <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">dashboard</a> to get started.</p>
            <br/>
            <p>Thanks,</p>
            <p>The Team</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error handling Supabase webhook:', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
