import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { env } from '@/env'

interface LinkDetailsProps {
  link: {
    id: string
    title: string
    url: string
    code: string
    accessCount: number
    createdAt: Date
    updatedAt: Date
  }
}

export function LinkDetails({ link }: LinkDetailsProps) {
  const [isCopied, setIsCopied] = useState(false)

  const url =
    env.MODE === 'test'
      ? `http://localhost:9999/${link.code}`
      : `${env.VITE_API_URL}/${link.code}`

  function handleCopyUrl() {
    navigator.clipboard.writeText(url)

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <DialogContent showCloseButton={false} className="w-sm">
      <Table>
        <TableBody className="font-normal">
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Título
            </TableCell>
            <TableCell className="w-2/3 font-medium">{link.title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">URL</TableCell>
            <TableCell className="w-2/3">{link.url}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Código
            </TableCell>
            <TableCell className="w-2/3">{link.code}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Acessos
            </TableCell>
            <TableCell className="w-2/3">{link.accessCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Criado em
            </TableCell>
            <TableCell className="text-muted-foreground w-2/3">
              {format(link.createdAt, "dd 'de' MMMM 'de' y", {
                locale: ptBR,
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Edtado em
            </TableCell>
            <TableCell className="w-2/3">
              {link.updatedAt
                ? format(link.updatedAt, "dd 'de' MMMM 'de' y", {
                    locale: ptBR,
                  })
                : '-'}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm">Copie e compartilhe o link encurtado</span>

        <div className="grid grid-cols-7 items-center gap-1.5">
          <span className="bg-muted col-span-5 truncate rounded-md p-2 text-sm">
            {url}
          </span>

          <Button size="icon" variant="ghost" onClick={handleCopyUrl}>
            {isCopied ? (
              <Check className="size-4 text-green-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}
