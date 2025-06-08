import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const cardsData = [
  {
    description: "Total de Vendas",
    title: "R$1,250.00",
    badge: { icon: <IconTrendingUp />, text: "+40%" },
    footerMain: <>Crescimento neste mês <IconTrendingUp className="size-4" /></>,
    footerSub: "Aumento de 10 pedidos neste mês",
  },
  {
    description: "Total de Vendas",
    title: "R$1,250.00",
    badge: { icon: <IconTrendingUp />, text: "+40%" },
    footerMain: <>Crescimento neste mês <IconTrendingUp className="size-4" /></>,
    footerSub: "Aumento de 10 pedidos neste mês",
  },
  {
    description: "Total de Vendas",
    title: "R$1,250.00",
    badge: { icon: <IconTrendingUp />, text: "+40%" },
    footerMain: <>Crescimento neste mês <IconTrendingUp className="size-4" /></>,
    footerSub: "Aumento de 10 pedidos neste mês",
  },
  {
    description: "Total de Vendas",
    title: "R$1,250.00",
    badge: { icon: <IconTrendingUp />, text: "+40%" },
    footerMain: <>Crescimento neste mês <IconTrendingUp className="size-4" /></>,
    footerSub: "Aumento de 10 pedidos neste mês",
  },
]

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cardsData.map((card, idx) => (
        <Card className="@container/card" key={idx}>
          <CardHeader>
            <CardDescription>{card.description}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {card.title}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {card.badge.icon}
                {card.badge.text}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {card.footerMain}
            </div>
            <div className="text-muted-foreground">
              {card.footerSub}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}