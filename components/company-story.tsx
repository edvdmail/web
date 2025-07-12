import Image from "next/image"

interface CompanyStoryProps {
  title: string
  content: string
  foundedYear: number
  image?: string
}

export function CompanyStory({ title, content, foundedYear, image }: CompanyStoryProps) {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - foundedYear

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{content}</p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{foundedYear}</div>
                <div className="text-sm text-gray-600">Año de fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{yearsInBusiness}+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src={image || "/placeholder.svg"}
              alt="Company story"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
