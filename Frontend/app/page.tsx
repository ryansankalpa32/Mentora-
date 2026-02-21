import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FilterDropdown from "@/components/FilterDropdown";


export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <TestimonialSection />
<div className="flex flex-col gap-6 items-center mt-2">
      {/* Subject */}
      <FilterDropdown
        title="Select Subject"
        options={[
          "Mathematics",
          "Science",
          "English",
          "ICT",
          "Commerce",
        ]}
      />

      {/* Price Range */}
      <FilterDropdown
        title="Select Price Range"
        options={[
          "Below Rs. 1000",
          "Rs. 1000 - 2000",
          "Rs. 2000 - 3000",
          "Above Rs. 3000",
        ]}
      />

      {/* District */}
      <FilterDropdown
        title="Select District"
        options={[
          "Colombo",
          "Gampaha",
          "Kandy",
          "Galle",
          "Kurunegala",
        ]}
      />

    </div>    </>
  );

  
}
