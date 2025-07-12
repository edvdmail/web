import type React from "react"
import { EnhancedHeader } from "./enhanced-header"
import { NavigationSection } from "./navigation-section"
import { GeneralSection } from "./general-section"
import { FooterSection } from "./footer-section"
import { ScrollToTop } from "./scroll-to-top"

interface CommonConfig {
  header: {
    topLeft: string
    topMiddle: string
    topRight: string
    logo?: string
    companyName?: string
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
}

interface CommonLayoutProps {
  config: CommonConfig
  children: React.ReactNode
}

export function CommonLayout({ config, children }: CommonLayoutProps) {
  return (
    <div className="min-h-screen w-full">
      {/* Header mejorado con logo */}
      <EnhancedHeader
        topLeft={config.header.topLeft}
        topMiddle={config.header.topMiddle}
        topRight={config.header.topRight}
        logo={config.header.logo}
        companyName={config.header.companyName}
      />

      {/* Navegación común */}
      <NavigationSection items={config.navigation.items} />

      {/* Contenido específico de cada página */}
      {children}

      {/* Sección general común */}
      <GeneralSection title={config.generalSection.title} content={config.generalSection.content} />

      {/* Footer común */}
      <FooterSection leftContent={config.footer.leftContent} rightContent={config.footer.rightContent} />

      {/* Botón scroll to top */}
      <ScrollToTop />
    </div>
  )
}
