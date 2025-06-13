import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

interface LinkDetailsProps {
  linkId: string
}

export function LinkDetails({ linkId }: LinkDetailsProps) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopyUrl() {
    const link = `http://localhost:3333/${'8ha6DsH'}`
    navigator.clipboard.writeText(link)

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
            <TableCell className="w-2/3 font-medium">
              Meu GitHub Pessoal
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Código
            </TableCell>
            <TableCell className="w-2/3">8ha6DsH</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Acessos
            </TableCell>
            <TableCell className="w-2/3">12</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Criado em
            </TableCell>
            <TableCell className="w-2/3">22 de Outubro de 2025</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground w-1/3">
              Edtado em
            </TableCell>
            <TableCell className="w-2/3">22 de Outubro de 2025</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm">Copie e compartilhe o link encurtado</span>

        <div className="grid grid-cols-7 items-center gap-1.5">
          <span className="bg-muted col-span-5 truncate rounded-md p-2 text-sm">
            http://localhost:3333/8ha6DsH
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
