interface GallerySectionProps {
  leftContent: string
  centerContent: string
  rightContent: string
}

export function GallerySection({ leftContent, centerContent, rightContent }: GallerySectionProps) {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
            <h3 className="font-semibold mb-2">Galería Izquierda</h3>
            <p className="text-gray-600">{leftContent}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4"></div>
            <h3 className="font-semibold mb-2">Galería Central</h3>
            <p className="text-gray-600">{centerContent}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4"></div>
            <h3 className="font-semibold mb-2">Galería Derecha</h3>
            <p className="text-gray-600">{rightContent}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
