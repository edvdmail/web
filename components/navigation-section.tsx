interface NavigationItem {
  label: string
  href: string
}

interface NavigationSectionProps {
  items: NavigationItem[]
}

export function NavigationSection({ items }: NavigationSectionProps) {
  return (
    <nav className="w-full bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-0">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="block px-6 py-4 hover:bg-blue-700 transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
