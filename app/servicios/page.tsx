import { CommonLayout } from "@/components/common-layout"
import { ServiceHero } from "@/components/service-hero"
import { ServicesList } from "@/components/services-list"
import { WorkProcess } from "@/components/work-process"
import type { ServiceConfig } from "@/types/service-config"
import serviceConfigData from "@/data/services-config.json"
import commonConfigData from "@/data/common-config.json"

export default function ServicesPage() {
  const config: ServiceConfig = serviceConfigData
  const commonConfig = commonConfigData

  return (
    <CommonLayout config={commonConfig}>
      <ServiceHero
        title={config.serviceHero.title}
        subtitle={config.serviceHero.subtitle}
        ctaText={config.serviceHero.ctaText}
        backgroundImage={config.serviceHero.backgroundImage}
      />

      <ServicesList title={config.servicesList.title} services={config.servicesList.services} />

      <WorkProcess
        title={config.workProcess.title}
        subtitle={config.workProcess.subtitle}
        steps={config.workProcess.steps}
      />
    </CommonLayout>
  )
}
