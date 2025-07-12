import Image from "next/image"

interface EnhancedHeaderProps {
  topLeft: string
  topMiddle: string
  topRight: string
  logo?: string
  companyName?: string
}

export function EnhancedHeader({ topLeft, topMiddle, topRight, logo, companyName }: EnhancedHeaderProps) {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Logo y nombre de la empresa */}
          <div className="text-left flex items-center space-x-4">
            {logo && (
              <div className="relative h-12 w-12">
                <Image src={logo || "/placeholder.svg"} alt="Logo" fill className="object-contain" />
              </div>
            )}
            <div>
              <h1 className="font-bold text-xl text-gray-800">{companyName || topLeft}</h1>
              <p className="text-xs text-gray-500">Tecnología e Innovación</p>
            </div>
          </div>

          {/* Mensaje central */}
          <div className="text-center">
            <p className="text-gray-700 font-medium">{topMiddle}</p>
          </div>

          {/* Información de contacto */}
          <div className="text-right">
            <p className="text-sm text-gray-600 font-medium">{topRight}</p>
            <p className="text-xs text-blue-600">contacto@techcompany.com</p>
          </div>
        </div>
      </div>
    </header>
  )
}
