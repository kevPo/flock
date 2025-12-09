'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signup(formData: FormData): Promise<void> {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    // You can later redirect with a query param like ?error=
    console.error('Email and password are required.')
    return
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.error('Signup error:', error.message)
    // Later: you can redirect back to /signup?error=...
    return
  }

  // For now, just send them to login after successful signup
  redirect('/login')
}