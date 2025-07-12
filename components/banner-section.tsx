import Image from "next/image"

interface BannerSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function BannerSection({ title, subtitle, backgroundImage }: BannerSectionProps) {
  return (
    <section className="w-full relative">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage || "/placeholder.svg"} alt="Banner background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  )
}
