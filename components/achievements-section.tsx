interface Achievement {
  number: string
  label: string
  description: string
}

interface AchievementsSectionProps {
  title: string
  stats: Achievement[]
}

export function AchievementsSection({ title, stats }: AchievementsSectionProps) {
  return (
    <section className="w-full py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
