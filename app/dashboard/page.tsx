import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '../logout/actions'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Flock 🐑</h1>

      <p className="text-sm text-gray-600">
        Logged in as: {user.email}
      </p>

      <form action={logout}>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Log out
        </button>
      </form>
    </div>
  )
}