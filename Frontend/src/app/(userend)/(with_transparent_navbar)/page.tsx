import React, { Fragment } from "react";
import RequirementSection from "./Components/RequirementSection";
import ReadyToGetStartSection from "./Components/ReadyToGetStartSection";
import ContactSection from "./Components/ContactSection";
import MoreForYouSection from "./Components/MoreForYouSection";
import dynamic from "next/dynamic";

const HeroSectionContent = dynamic(
   () => import("./Components/HeroSectionContent")
);
const CategorySection = dynamic(() => import("./Components/CategorySection"));
const DiscoveredSection = dynamic(
   () => import("./Components/DiscoveredSection")
);
const TrendyProducts = dynamic(() => import("./Components/TrendyProducts"));
const UpcomingProducts = dynamic(() => import("./Components/UpcomingProducts"));
const SaleByCitiesSection = dynamic(
   () => import("./Components/SaleByCitiesSection")
);
const OurClientSection = dynamic(() => import("./Components/OurClientSection"));
const RecentBlogSection = dynamic(
   () => import("./Components/RecentBlogSection")
);

export default function Home() {
   return (
      <Fragment>
         <HeroSectionContent />
         <CategorySection />
         <DiscoveredSection />
         <TrendyProducts />
         <UpcomingProducts />
         <RequirementSection />
         <SaleByCitiesSection />
         <OurClientSection />
         <RecentBlogSection />
         <ReadyToGetStartSection />
         <ContactSection />
         <MoreForYouSection />
      </Fragment>
   );
}
