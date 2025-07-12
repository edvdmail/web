interface GeneralSectionProps {
  title: string
  content: string
}

export function GeneralSection({ title, content }: GeneralSectionProps) {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{content}</p>
        </div>
      </div>
    </section>
  )
}
