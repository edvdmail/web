export interface ContactConfig {
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

  // Secciones específicas de contacto
  contactHero: {
    title: string
    subtitle: string
    backgroundImage?: string
  }
  contactForm: {
    title: string
    subtitle: string
    fields: Array<{
      name: string
      label: string
      type: string
      required: boolean
      placeholder: string
    }>
    submitText: string
  }
  contactInfo: {
    title: string
    items: Array<{
      icon: string
      label: string
      value: string
      link?: string
    }>
  }
  mapSection: {
    title: string
    address: string
    embedUrl?: string
  }
  faq: {
    title: string
    questions: Array<{
      question: string
      answer: string
    }>
  }
}
