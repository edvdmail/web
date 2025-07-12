interface MissionVisionProps {
  mission: {
    title: string
    content: string
    icon: string
  }
  vision: {
    title: string
    content: string
    icon: string
  }
  values: {
    title: string
    items: Array<{
      name: string
      description: string
      icon: string
    }>
  }
}

export function MissionVision({ mission, vision, values }: MissionVisionProps) {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">{mission.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
            <p className="text-gray-700 leading-relaxed">{mission.content}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">{vision.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
            <p className="text-gray-700 leading-relaxed">{vision.content}</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">{values.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.items.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{value.name}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
