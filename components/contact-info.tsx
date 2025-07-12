interface ContactItem {
  icon: string
  label: string
  value: string
  link?: string
}

interface ContactInfoProps {
  title: string
  items: ContactItem[]
}

export function ContactInfo({ title, items }: ContactInfoProps) {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.label}</h3>
              {item.link ? (
                <a href={item.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
