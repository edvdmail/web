export interface AboutConfig {
  // Secciones comunes
  header: {
    topLeft: string
    topMiddle: string
    topRight: string
  }
  navigation: {
    items: Array<{
      label: string
      href: string
    }>
  }
  generalSection: {
    title: string
    content: string
  }
  footer: {
    leftContent: string
    rightContent: string
  }

  // Secciones específicas de acerca de
  aboutHero: {
    title: string
    subtitle: string
    backgroundImage?: string
  }
  companyStory: {
    title: string
    content: string
    foundedYear: number
    image?: string
  }
  missionVision: {
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
  team: {
    title: string
    subtitle: string
    members: Array<{
      name: string
      position: string
      bio: string
      image: string
      social?: {
        linkedin?: string
        twitter?: string
        email?: string
      }
    }>
  }
  achievements: {
    title: string
    stats: Array<{
      number: string
      label: string
      description: string
    }>
  }
}
