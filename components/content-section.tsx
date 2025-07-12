interface ContentSectionProps {
  leftWidth: number
  centerWidth: number
  leftContent: string
  centerContent: string
}

export function ContentSection({ leftWidth, centerWidth, leftContent, centerContent }: ContentSectionProps) {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <div className="bg-gray-50 p-6 rounded-lg" style={{ width: `${leftWidth}%` }}>
            <h3 className="font-semibold mb-4 text-gray-800">Contenido Izquierdo</h3>
            <p className="text-gray-600">{leftContent}</p>
          </div>
          <div className="bg-white p-6 rounded-lg border" style={{ width: `${centerWidth}%` }}>
            <h3 className="font-semibold mb-4 text-gray-800">Contenido Principal</h3>
            <p className="text-gray-700">{centerContent}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
