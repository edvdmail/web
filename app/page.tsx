import { CommonLayout } from "@/components/common-layout"
import { ContentSection } from "@/components/content-section"
import { BannerSection } from "@/components/banner-section"
import { GallerySection } from "@/components/gallery-section"
import type { PageConfig } from "@/types/page-config"
import pageConfigData from "@/data/page-config.json"
import commonConfigData from "@/data/common-config.json"

export default function DynamicPage() {
  const config: PageConfig = pageConfigData
  const commonConfig = commonConfigData

  return (
    <CommonLayout config={commonConfig}>
      {/* Content Section */}
      <ContentSection
        leftWidth={config.content.leftWidth}
        centerWidth={config.content.centerWidth}
        leftContent={config.content.leftContent}
        centerContent={config.content.centerContent}
      />

      {/* Banner Section */}
      <BannerSection
        title={config.banner.title}
        subtitle={config.banner.subtitle}
        backgroundImage={config.banner.backgroundImage}
      />

      {/* Gallery Section */}
      <GallerySection
        leftContent={config.gallery.leftContent}
        centerContent={config.gallery.centerContent}
        rightContent={config.gallery.rightContent}
      />
    </CommonLayout>
  )
}
