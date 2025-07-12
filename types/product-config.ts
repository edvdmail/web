export interface ProductConfig {
  // Secciones comunes (se mantienen igual)
  header: {
    topLeft: string
    topMiddle: string
    topRight: string
  }
  navigation: {
    items: Array<{
      label: string
      href: string
    }>
  }
  generalSection: {
    title: string
    content: string
  }
  footer: {
    leftContent: string
    rightContent: string
  }

  // Secciones específicas de productos
  productHero: {
    title: string
    subtitle: string
    backgroundImage?: string
  }
  categories: {
    title: string
    items: Array<{
      name: string
      description: string
      image: string
      productCount: number
    }>
  }
  featuredProducts: {
    title: string
    products: Array<{
      id: string
      name: string
      price: number
      originalPrice?: number
      image: string
      description: string
      badge?: string
    }>
  }
  productGrid: {
    title: string
    showFilters: boolean
    itemsPerRow: number
    products: Array<{
      id: string
      name: string
      price: number
      image: string
      category: string
      rating: number
      inStock: boolean
    }>
  }
  specifications: {
    title: string
    content: string
    features: string[]
  }
}
