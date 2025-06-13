import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Forneça uma senha válida.' }),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const { mutateAsync: signInFn, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (token) => {
      document.cookie = `token=${token}; path=/`

      navigate('/links')

      toast.success('Bem-vindo ao seu painel!')
    },
    onError: async (err) => {
      if (err instanceof HTTPError) {
        const { message } = await err.response.json()

        toast.error(message)
      }
    },
  })

  return (
    <>
      <title>Login | shrink.er</title>

      <form
        onSubmit={handleSubmit(({ email, password }) =>
          signInFn({ email, password }),
        )}
        className="flex w-full flex-col items-center justify-center gap-6"
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">
            shrink<span className="text-muted-foreground">.er</span>
          </span>

          <span className="text-muted-foreground text-sm">
            Acesse o seu painel de links
          </span>
        </div>

        <div className="bg-border h-px w-full" />

        <div className="grid w-full gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              autoComplete="off"
              placeholder="johndoe@example.com"
              {...register('email')}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              placeholder="• • • • • • • •"
              {...register('password')}
            />
          </div>
        </div>

        <div className="grid w-full max-w-full grid-cols-3 gap-3">
          <Link to="/sign-up" className="col-span-2 w-fit">
            <Button variant="link" type="button">
              Não tem uma conta?
            </Button>
          </Link>

          <Button type="submit" disabled={isPending || !!errors.password}>
            Entrar
          </Button>
        </div>
      </form>
    </>
  )
}
