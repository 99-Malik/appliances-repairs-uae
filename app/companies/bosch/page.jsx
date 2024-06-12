import BoschBanner from "@/components/sections/bosch/BoschBanner";
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import HomeQuality from "../../../components/sections/bosch/HomeQuality"
import Feature from "../../../components/sections/bosch/feature"

const BoschServiceCenterPage = () => {
  return (
    <div className="flex flex-col">
      <BoschBanner />
      <QualitySection />
      <AboutSection />
      <HomeQuality/>
      <Feature/>
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default BoschServiceCenterPage;
