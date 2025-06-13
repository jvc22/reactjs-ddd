import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function PromotionalCard() {
  return (
    <Card className="@container/card bg-transparent">
      <CardHeader>
        <CardDescription className="text-center">
          Está gostando?
        </CardDescription>
        <CardTitle className="text-center text-base font-semibold @[250px]/card:text-lg">
          Mude para o shrink<span className="text-muted-foreground">.er</span>+
        </CardTitle>
      </CardHeader>
    </Card>
  )
}
