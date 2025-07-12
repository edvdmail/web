export interface PageConfig {
  header: {
    topLeft: string
    topMiddle: string
    topRight: string
    logo?: string
  }
  navigation: {
    items: Array<{
      label: string
      href: string
    }>
  }
  content: {
    leftWidth: number
    centerWidth: number
    leftContent: string
    centerContent: string
  }
  banner: {
    title: string
    subtitle: string
    backgroundImage?: string
  }
  gallery: {
    leftContent: string
    centerContent: string
    rightContent: string
  }
  generalSection: {
    title: string
    content: string
  }
  footer: {
    leftContent: string
    rightContent: string
  }
}
