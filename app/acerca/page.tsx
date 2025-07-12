import { CommonLayout } from "@/components/common-layout"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { MissionVision } from "@/components/mission-vision"
import { TeamSection } from "@/components/team-section"
import { AchievementsSection } from "@/components/achievements-section"
import type { AboutConfig } from "@/types/about-config"
import aboutConfigData from "@/data/about-config.json"
import commonConfigData from "@/data/common-config.json"

export default function AboutPage() {
  const config: AboutConfig = aboutConfigData
  const commonConfig = commonConfigData

  return (
    <CommonLayout config={commonConfig}>
      <AboutHero
        title={config.aboutHero.title}
        subtitle={config.aboutHero.subtitle}
        backgroundImage={config.aboutHero.backgroundImage}
      />

      <CompanyStory
        title={config.companyStory.title}
        content={config.companyStory.content}
        foundedYear={config.companyStory.foundedYear}
        image={config.companyStory.image}
      />

      <MissionVision
        mission={config.missionVision.mission}
        vision={config.missionVision.vision}
        values={config.missionVision.values}
      />

      <TeamSection title={config.team.title} subtitle={config.team.subtitle} members={config.team.members} />

      <AchievementsSection title={config.achievements.title} stats={config.achievements.stats} />
    </CommonLayout>
  )
}
