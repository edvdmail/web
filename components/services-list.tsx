interface Service {
  id: string
  name: string
  description: string
  icon: string
  price: string
  features: string[]
}

interface ServicesListProps {
  title: string
  services: Service[]
}

export function ServicesList({ title, services }: ServicesListProps) {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-xl font-bold text-green-600 mb-6">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Solicitar Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
