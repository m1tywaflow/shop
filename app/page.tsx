import HeroSection from "@/app/components/homeComponents/Hero/HeroSection";
import NewWeekSection from "./components/homeComponents/newThisWeek/NewWeekSection";
import XivSection from "./components/homeComponents/XivCollections/XivSection";
import InfoSection from "./components/homeComponents/InfoSection/InfoSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NewWeekSection />
      <XivSection />
      <InfoSection />
    </>
  );
};

export default HomePage;
