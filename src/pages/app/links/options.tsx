import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerLink } from '@/api/register-link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const newLinkSchema = z.object({
  title: z.string().min(1, { message: 'Forneça um título válido.' }),
  url: z.string().url({ message: 'Forneça uma URL válida.' }),
})

type NewLinkSchema = z.infer<typeof newLinkSchema>

export function Options() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewLinkSchema>({
    resolver: zodResolver(newLinkSchema),
  })

  const { mutateAsync: registerLinkFn, isPending } = useMutation({
    mutationFn: registerLink,
    onSuccess: (token) => {
      document.cookie = `token=${token}; path=/`

      toast.success('Link registrado com sucesso!')
      reset()
    },
    onError: async (err) => {
      if (err instanceof HTTPError) {
        const { message } = await err.response.json()

        toast.error(message)
      }
    },
  })

  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="max-md:w-full">Adicionar novo link</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-96">
          <form
            className="grid gap-4"
            onSubmit={handleSubmit(({ title, url }) => {
              registerLinkFn({ title, url })
            })}
          >
            <div className="grid grid-cols-5 items-center gap-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                autoComplete="off"
                placeholder="Meu link"
                className="col-span-4 h-8 text-sm"
                {...register('title')}
              />
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <Label htmlFor="url">Url</Label>
              <Input
                id="url"
                autoComplete="off"
                placeholder="Url do link"
                className="col-span-4 h-8 text-sm"
                {...register('url')}
              />
            </div>
            {errors.title ? (
              <span className="text-destructive text-sm">
                {errors.title.message}
              </span>
            ) : (
              errors.url && (
                <span className="text-destructive text-sm">
                  {errors.url.message}
                </span>
              )
            )}
            <div className="grid grid-cols-2 gap-2">
              <Button
                size="sm"
                type="reset"
                variant="secondary"
                disabled={isPending}
              >
                Cancelar
              </Button>
              <Button
                size="sm"
                type="submit"
                variant="outline"
                disabled={isPending}
              >
                Salvar
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
