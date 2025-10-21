import React from "react";

// Import Sections
import HeaderSection from "./../HeaderSection/HeadeSection";
import AboutSection from "../AboutSection/AboutSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ContactSection from "../Contact/Contact";
import FooterSection from "../Footer/Footer";

// Import Images
import mypicture from "../../assets/images/Newpic.jpg";
import puzzle from "../../assets/images/mypic.jpeg"; // لو الصورة موجودة

export default function Home() {
  // Scroll to About section
  const handleShowMore = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header Section */}
      <HeaderSection mypicture={mypicture} onShowMore={handleShowMore} />

      {/* About Section */}
      <div id="about">
        <AboutSection puzzle={puzzle} />
      </div>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
