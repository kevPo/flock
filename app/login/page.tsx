import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { login } from './actions'

export default async function LoginPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If the user is already logged in, send them to the dashboard
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-sm space-y-4" action={login}>
        <h1 className="text-2xl font-bold text-center">Log in to Flock</h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  )
}