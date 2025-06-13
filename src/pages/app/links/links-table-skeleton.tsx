import { Pencil, Search, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function LinksTableSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <TableRow key={i}>
            <TableCell className="w-[64px]">
              <Button size="icon" disabled variant="outline">
                <Search />
              </Button>
            </TableCell>
            <TableCell className="w-[280p]">
              <Skeleton className="h-4 w-[220px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell className="w-[180px]">
              <Skeleton className="h-4 w-[140px]" />
            </TableCell>
            <TableCell className="w-[220px]">
              <div className="flex w-full justify-center">
                <Skeleton className="h-4 w-6" />
              </div>
            </TableCell>
            <TableCell className="flex w-[160px] justify-end gap-2">
              <Button size="sm" disabled variant="outline">
                Editar <Pencil className="size-4" />
              </Button>
              <Button size="sm" disabled variant="destructive">
                <Trash2 className="size-4" />
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
