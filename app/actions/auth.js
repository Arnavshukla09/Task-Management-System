'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  // Hardcoded credentials for Admin/Manager
  if (username === 'admin' && password === 'password123') {
    // Set cookie
    cookies().set('auth_token', 'manager-authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    
    redirect('/');
  } else {
    return { error: 'Invalid credentials' };
  }
}

export async function logout() {
  cookies().delete('auth_token');
  redirect('/login');
}
