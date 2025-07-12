interface HeaderSectionProps {
  topLeft: string
  topMiddle: string
  topRight: string
  logo?: string
}

export function HeaderSection({ topLeft, topMiddle, topRight, logo }: HeaderSectionProps) {
  return (
    <header className="w-full bg-gray-100 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="text-left flex items-center space-x-3">
            {logo && (
              <img
                src={logo || "/placeholder.svg?height=40&width=40"}
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            )}
            <h1 className="font-bold text-lg">{topLeft}</h1>
          </div>
          <div className="text-center">
            <p className="text-gray-700">{topMiddle}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">{topRight}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
