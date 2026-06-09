import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    // 🌟 CORREÇÃO: cookies() agora precisa de await no Next.js moderno
    const cookieStore = await cookies()
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          // 🌟 NOVO PADRÃO: getAll e setAll blindam o código contra erros de tipação
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch (error) {
              // Esse bloco pode ser ignorado com segurança se você tiver um middleware controlando a sessão
            }
          },
        },
      }
    )
    
    // Troca o código temporário pela sessão ativa
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Redireciona de volta para a raiz do projeto (localhost:3000)
  return NextResponse.redirect(requestUrl.origin)
}