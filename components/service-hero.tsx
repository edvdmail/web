import Image from "next/image"

interface ServiceHeroProps {
  title: string
  subtitle: string
  ctaText: string
  backgroundImage?: string
}

export function ServiceHero({ title, subtitle, ctaText, backgroundImage }: ServiceHeroProps) {
  return (
    <section className="relative w-full h-96">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage || "/placeholder.svg"} alt="Services hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70"></div>
        </div>
      )}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90 mb-8">{subtitle}</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}
