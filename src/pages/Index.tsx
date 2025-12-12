import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { FeaturesSection } from "@/components/home/FeaturesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CoursesPreview />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;
