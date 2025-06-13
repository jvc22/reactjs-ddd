import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { fetchRecentLinks } from '@/api/fetch-recent-links'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { LinksTableRow } from './links-table-row'
import { LinksTableSkeleton } from './links-table-skeleton'

export function LinksTable() {
  const [pageIndex, setPageIndex] = useState(0)

  const { data, isFetching } = useQuery({
    queryKey: ['links', pageIndex],
    queryFn: () => fetchRecentLinks({ page: pageIndex + 1 }),
  })

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="text-muted-foreground bg-card">
              <TableCell className="w-[64px]"></TableCell>
              <TableCell className="w-[280px]">Título</TableCell>
              <TableCell>Código</TableCell>
              <TableCell className="w-[180px]">URL</TableCell>
              <TableCell className="w-[220px] text-center">Acessos</TableCell>
              <TableCell className="w-[160px]"></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching && !data && <LinksTableSkeleton />}

            {data &&
              data.links.map((link) => (
                <LinksTableRow key={link.id} link={link} />
              ))}

            {data && data.links.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-muted-foreground py-6 text-center"
                >
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {data && (
        <Pagination
          pageIndex={pageIndex}
          totalCount={data.totalCount}
          onPageChange={setPageIndex}
        />
      )}
    </div>
  )
}
