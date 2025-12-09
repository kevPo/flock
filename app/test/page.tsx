import { createClient } from '@/lib/supabase/server'

export default async function TestPage() {
  const supabase = await createClient()
  const { data } = await supabase.from('anything').select('*').limit(1)

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Supabase Connected ✅</h1>
      <pre className="mt-4 text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}