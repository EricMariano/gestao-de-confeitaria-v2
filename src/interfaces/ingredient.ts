export interface Ingredient {
  id: string
  name: string
  description?: string
  unit: string
  quantity: number
  minQuantity: number
  category: string
  cost: number
  supplier?: string
  lastUpdated: Date
  status: 'active' | 'inactive' | 'low_stock'
} 