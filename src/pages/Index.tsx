import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhySalvoraSection } from "@/components/home/WhySalvoraSection";
import { DesignedForElSalvadorSection } from "@/components/home/DesignedForElSalvadorSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { AudienceSection } from "@/components/home/AudienceSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { MissionSection } from "@/components/home/MissionSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhySalvoraSection />
      <DesignedForElSalvadorSection />
      <HowItWorksSection />
      <AudienceSection />
      <CoursesPreview />
      <MissionSection />
    </Layout>
  );
};

export default Index;
