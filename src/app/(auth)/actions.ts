'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    return { error: error.message };
  }
  
  return redirect('/dashboard');
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('full_name') as string;
  const origin = headers().get('origin');
  
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: `${origin}/api/auth/callback`,
    },
  });
  
  if (error) {
    return { error: error.message };
  }
  
  return { success: 'Check your email to continue sign in process' };
}

export async function resetPassword(formData: FormData) {
  const email = formData.get('email') as string;
  const origin = headers().get('origin');
  
  const supabase = createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/api/auth/callback?redirect_to=/dashboard/settings`,
  });
  
  if (error) {
    return { error: error.message };
  }
  
  return { success: 'Check your email for a password reset link' };
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const origin = headers().get('origin');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/api/auth/callback`,
    },
  });
  
  if (error) {
    return { error: error.message };
  }
  
  if (data.url) {
    redirect(data.url);
  }
}

export async function signInWithMagicLink(formData: FormData) {
  const email = formData.get('email') as string;
  const origin = headers().get('origin');
  
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/api/auth/callback`,
    },
  });
  
  if (error) {
    return { error: error.message };
  }
  
  return { success: 'Check your email for the magic link' };
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/login');
}
