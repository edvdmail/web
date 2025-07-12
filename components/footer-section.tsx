interface FooterSectionProps {
  leftContent: string
  rightContent: string
}

export function FooterSection({ leftContent, rightContent }: FooterSectionProps) {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300">{leftContent}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300">{rightContent}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
