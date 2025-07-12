import Image from "next/image"

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

interface TeamSectionProps {
  title: string
  subtitle: string
  members: TeamMember[]
}

export function TeamSection({ title, subtitle, members }: TeamSectionProps) {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {member.social && (
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                        LinkedIn
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                        Twitter
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-gray-800">
                        Email
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
