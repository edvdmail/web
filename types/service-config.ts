export interface ServiceConfig {
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

  // Secciones específicas de servicios
  serviceHero: {
    title: string
    subtitle: string
    ctaText: string
    backgroundImage?: string
  }
  servicesList: {
    title: string
    services: Array<{
      id: string
      name: string
      description: string
      icon: string
      price: string
      features: string[]
    }>
  }
  workProcess: {
    title: string
    subtitle: string
    steps: Array<{
      stepNumber: number
      title: string
      description: string
      icon: string
    }>
  }
  testimonials: {
    title: string
    reviews: Array<{
      id: string
      name: string
      company: string
      rating: number
      comment: string
      avatar?: string
    }>
  }
  callToAction: {
    title: string
    subtitle: string
    buttonText: string
    buttonLink: string
    backgroundColor: string
  }
}
