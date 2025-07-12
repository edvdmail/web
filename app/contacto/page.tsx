import { CommonLayout } from "@/components/common-layout"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { FaqSection } from "@/components/faq-section"
import type { ContactConfig } from "@/types/contact-config"
import contactConfigData from "@/data/contact-config.json"
import commonConfigData from "@/data/common-config.json"

export default function ContactPage() {
  const config: ContactConfig = contactConfigData
  const commonConfig = commonConfigData

  return (
    <CommonLayout config={commonConfig}>
      <ContactHero
        title={config.contactHero.title}
        subtitle={config.contactHero.subtitle}
        backgroundImage={config.contactHero.backgroundImage}
      />

      <ContactForm
        title={config.contactForm.title}
        subtitle={config.contactForm.subtitle}
        fields={config.contactForm.fields}
        submitText={config.contactForm.submitText}
      />

      <ContactInfo title={config.contactInfo.title} items={config.contactInfo.items} />

      <FaqSection title={config.faq.title} questions={config.faq.questions} />
    </CommonLayout>
  )
}
