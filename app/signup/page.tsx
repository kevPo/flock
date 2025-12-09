import { signup } from './actions'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-sm space-y-4" action={signup}>
        <h1 className="text-2xl font-bold text-center">Create your Flock account</h1>

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
          Sign Up
        </button>
      </form>
    </div>
  )
}