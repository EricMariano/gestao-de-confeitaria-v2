import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { IconPlus, IconSearch } from "@tabler/icons-react"
import IngredientsTable from "./c-table"

export default function IngredientsPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <h1 className="text-2xl font-bold text-primary">Gestão de Ingredientes</h1>
        <p className="text-muted-foreground">
          Gerencie seus ingredientes e estoque aqui.
        </p>

      </div>

      <div className="px-4 lg:px-6">
      <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-sm">
                <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar ingredientes..."
                  className="pl-8"
                />
              </div>
              <Button>
                <IconPlus className="mr-2 h-4 w-4" />
                Novo Ingrediente
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <IngredientsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}