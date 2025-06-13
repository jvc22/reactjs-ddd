import { Pencil, Search, SquareArrowOutUpRight, Trash2 } from 'lucide-react'
import { Link } from 'react-router'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { LinkDetails } from './link-details'

interface LinksTableRowProps {
  link: {
    id: string
    title: string
    url: string
    code: string
    accessCount: number
  }
}

export function LinksTableRow({ link }: LinksTableRowProps) {
  return (
    <TableRow>
      <TableCell className="w-[64px]">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" variant="outline">
              <Search />
            </Button>
          </DialogTrigger>
          <LinkDetails linkId={link.id} />
        </Dialog>
      </TableCell>
      <TableCell className="w-[280px]">
        <div className="max-w-[240px] truncate">
          <span>{link.title}</span>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">{link.code}</TableCell>
      <TableCell className="w-[180px]">
        <Link to={link.url} target="_blank" about="_blank">
          <Badge variant="secondary" className="max-w-[160px]">
            <span className="truncate">{link.url}</span>
            <SquareArrowOutUpRight className="size-3" />
          </Badge>
        </Link>
      </TableCell>
      <TableCell className="w-[220px] text-center">
        {link.accessCount}
      </TableCell>
      <TableCell className="flex w-[160px] justify-end gap-2">
        <Button size="sm" variant="outline">
          Editar <Pencil className="size-4" />
        </Button>
        <Button size="sm" variant="destructive">
          <Trash2 className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
