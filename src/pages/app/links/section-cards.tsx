import { useQuery } from '@tanstack/react-query'
import { Eye, PackagePlus } from 'lucide-react'
import CountUp from 'react-countup'

import { getMetrics } from '@/api/get-metrics'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

import { PromotionalCard } from './promotional-card'

export function SectionCards() {
  const { data: metrics, isFetching } = useQuery({
    queryKey: ['metrics'],
    queryFn: getMetrics,
    staleTime: 1000 * 60 * 3,
  })

  return (
    <div className="grid grid-cols-1 gap-6 @xl/main:grid-cols-3">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex items-start justify-between">
            Links criados
            <PackagePlus className="size-4" />
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {metrics && !isFetching ? (
              <CountUp end={metrics.totalCount} />
            ) : (
              <Skeleton className="h-9 w-24" />
            )}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="flex items-start justify-between">
            Total de acessos
            <Eye className="size-4" />
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {metrics && !isFetching ? (
              <CountUp end={metrics.totalAccessCount} />
            ) : (
              <Skeleton className="h-9 w-32" />
            )}
          </CardTitle>
        </CardHeader>
      </Card>
      <PromotionalCard />
    </div>
  )
}
