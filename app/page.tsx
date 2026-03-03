import HeroSection from "@/app/components/homeComponents/Hero/HeroSection";
import NewWeekSection from "./components/homeComponents/newThisWeek/NewWeekSection";
import XivSection from "./components/homeComponents/XivCollections/XivSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NewWeekSection />
      <XivSection />
    </>
  );
};

export default HomePage;
