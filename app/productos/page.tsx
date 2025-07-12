import { CommonLayout } from "@/components/common-layout"
import { ProductHero } from "@/components/product-hero"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProducts } from "@/components/featured-products"
import type { ProductConfig } from "@/types/product-config"
import productConfigData from "@/data/products-config.json"
import commonConfigData from "@/data/common-config.json"

export default function ProductsPage() {
  const config: ProductConfig = productConfigData
  const commonConfig = commonConfigData

  return (
    <CommonLayout config={commonConfig}>
      <ProductHero
        title={config.productHero.title}
        subtitle={config.productHero.subtitle}
        backgroundImage={config.productHero.backgroundImage}
      />

      <ProductCategories title={config.categories.title} items={config.categories.items} />

      <FeaturedProducts title={config.featuredProducts.title} products={config.featuredProducts.products} />
    </CommonLayout>
  )
}
