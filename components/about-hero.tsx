import Image from "next/image"

interface AboutHeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function AboutHero({ title, subtitle, backgroundImage }: AboutHeroProps) {
  return (
    <section className="relative w-full h-80">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage || "/placeholder.svg"} alt="About hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-blue-900/70"></div>
        </div>
      )}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
