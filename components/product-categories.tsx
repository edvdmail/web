import Image from "next/image"

interface Category {
  name: string
  description: string
  image: string
  productCount: number
}

interface ProductCategoriesProps {
  title: string
  items: Category[]
}

export function ProductCategories({ title, items }: ProductCategoriesProps) {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {category.productCount} productos
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
