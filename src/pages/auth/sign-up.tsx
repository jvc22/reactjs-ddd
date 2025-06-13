import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

import { signUp } from '@/api/sign-up'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpSchema = z
  .object({
    name: z.string().min(1, { message: 'Forneça um nome válido.' }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'A senha deve conter ao menos 8 caracteres.' }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas devem coincidir.',
    path: ['confirm_password'],
  })

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: signUpFn, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success('Conta criada com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
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
      <title>Registro | shrink.er</title>

      <form
        onSubmit={handleSubmit(({ name, email, password }) => {
          signUpFn({ name, email, password })
        })}
        className="flex w-full flex-col items-center justify-center gap-6"
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">
            shrink<span className="text-muted-foreground">.er</span>
          </span>

          <span className="text-muted-foreground text-sm">
            Compartilhe seus links encurtados
          </span>
        </div>

        <div className="bg-border h-px w-full" />

        <div className="grid w-full gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              autoComplete="off"
              placeholder="John Doe"
              {...register('name')}
            />

            {errors.name && (
              <span className="text-sm text-red-400">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              autoComplete="off"
              placeholder="johndoe@example.com"
              {...register('email')}
            />

            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
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

            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="confirm_password">Confirme a senha</Label>
            <Input
              id="confirm_password"
              type="password"
              autoComplete="off"
              placeholder="• • • • • • • •"
              {...register('confirm_password')}
            />

            {errors.confirm_password && (
              <span className="text-sm text-red-400">
                {errors.confirm_password.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-full grid-cols-3 gap-3">
          <Link to="/sign-in" className="col-span-2 h-fit w-fit">
            <Button variant="link" type="button">
              Já possui uma conta?
            </Button>
          </Link>

          <Button type="submit" disabled={isPending}>
            Registrar
          </Button>
        </div>
      </form>
    </>
  )
}
