import React from "react";
import { SectionType } from "../../../../lib/sanity/types/page";
import HeroSection from "../../HeroSection";
import ResourceListingSection from "../../ResourceListingSection";
import CategoryListingSection from "../../CategoryListingSection";
import HomeHeroSection from "@/components/HomeHeroSection";
import AllBlogPostSection from "@/components/AllBlogPostSection";
import AllStoryPostSection from "@/components/AllStoryPostSection";

import AllResourcePostSection from "@/components/AllResourcePostSection";
import ContactUsSection from "@/components/ContactUsSection";
import AnimationSection from "@/components/AnimationSection";
import PrivacyTermsAndConditionSection from "@/components/PrivacyTermsAndConditionSection";
import FourZeroFourSection from "@/components/FourZeroFourSection";
interface SectionProps {
  data: SectionType;
  slug: string;
}
const Section: React.FC<SectionProps> = ({ data, slug }) => {
  switch (data._type) {
    case "homeHeroSection":
      return (
        <div className="s(1280):h-auto h-screen s(1280):static sticky top-0 overflow-hidden">
          <HomeHeroSection slug={slug} {...data} />
        </div>
      );
    case "heroSection":
      return <HeroSection slug={slug} {...data} />;
    case "animationSection":
      return <AnimationSection {...data} />;
    case "resourceListingSection":
      return (
        <div className="s(1280):h-auto h-screen s(1280):static sticky top-0 resourceSection">
          <ResourceListingSection {...data} />
        </div>
      );
    case "categoryListingSection":
      return <CategoryListingSection {...data} />;
    case "allBlogPostSection":
      return <AllBlogPostSection {...data} />;
    case "allStoryPostSection":
      return <AllStoryPostSection {...data} />;
    case "allResourcePostSection":
      return <AllResourcePostSection {...data} />;
    case "contactUsSection":
      return <ContactUsSection {...data} />;
    case "privacyTermsAndConditionSection":
      return <PrivacyTermsAndConditionSection {...data} />;
    case "fourZeroFourSection":
      return <FourZeroFourSection {...data} />;
    default:
      return null;
  }
};

export default Section;
