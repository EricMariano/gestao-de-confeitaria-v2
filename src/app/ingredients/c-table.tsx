import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Ingredient } from "@/interfaces/ingredient"

// Dados mockados
const mockIngredients: Ingredient[] = [
    {
      id: "1",
      name: "Farinha de Trigo",
      description: "Farinha de trigo tipo 1",
      unit: "kg",
      quantity: 25.5,
      minQuantity: 5,
      category: "Farinhas",
      cost: 4.50,
      supplier: "",
      lastUpdated: new Date("2024-01-15"),
      status: "active"
    },
    {
      id: "2",
      name: "Açúcar Refinado",
      description: "Açúcar branco refinado",
      unit: "kg",
      quantity: 15.0,
      minQuantity: 3,
      category: "Adoçantes",
      cost: 3.80,
      supplier: "",
      lastUpdated: new Date("2024-01-14"),
      status: "low_stock"
    },
    {
      id: "3",
      name: "Ovos",
      description: "Ovos frescos tipo A",
      unit: "unidades",
      quantity: 120,
      minQuantity: 30,
      category: "Ovos e Laticínios",
      cost: 0.45,
      supplier: "",
      lastUpdated: new Date("2024-01-16"),
      status: "active"
    },
    {
      id: "4",
      name: "Manteiga",
      description: "Manteiga sem sal",
      unit: "kg",
      quantity: 8.0,
      minQuantity: 2,
      category: "Ovos e Laticínios",
      cost: 12.50,
      supplier: "",
      lastUpdated: new Date("2024-01-13"),
      status: "inactive"
    },
    {
      id: "5",
      name: "Chocolate 70%",
      description: "Chocolate amargo 70% cacau",
      unit: "kg",
      quantity: 2.5,
      minQuantity: 1,
      category: "Chocolates",
      cost: 25.00,
      supplier: "",
      lastUpdated: new Date("2024-01-12"),
      status: "low_stock"
    }
]


function formatDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR').format(date)
}

function getStatusBadge(status: Ingredient['status']) {
    switch (status) {
      case 'active':
        return <Badge variant="active">Ativo</Badge>
      case 'inactive':
        return <Badge variant="destructive">Inativo</Badge>
      case 'low_stock':
        return <Badge variant="low_stock">Estoque Baixo</Badge>
      default:
        return <Badge variant="outline">Desconhecido</Badge>
    }
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
}

export default function IngredientsTable() {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Estoque Mínimo</TableHead>
            <TableHead>Preço Unitário</TableHead>
            <TableHead>Fornecedor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Última Atualização</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockIngredients.map((ingredient) => (
            <TableRow key={ingredient.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{ingredient.name}</div>
                  {ingredient.description && (
                    <div className="text-sm text-muted-foreground">
                      {ingredient.description}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>{ingredient.category}</TableCell>
              <TableCell>
                {ingredient.quantity} {ingredient.unit}
              </TableCell>
              <TableCell>
                {ingredient.minQuantity} {ingredient.unit}
              </TableCell>
              <TableCell>{formatCurrency(ingredient.cost)}</TableCell>
              <TableCell>{ingredient.supplier || '-'}</TableCell>
              <TableCell>{getStatusBadge(ingredient.status)}</TableCell>
              <TableCell>{formatDate(ingredient.lastUpdated)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}