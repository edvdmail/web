import Image from "next/image"

interface ContactHeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function ContactHero({ title, subtitle, backgroundImage }: ContactHeroProps) {
  return (
    <section className="relative w-full h-80">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage || "/placeholder.svg"} alt="Contact hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70"></div>
        </div>
      )}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
