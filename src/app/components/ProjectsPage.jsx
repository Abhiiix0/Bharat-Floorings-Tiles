import { DESIGNER_IMAGES, PROJECT_PAGE_IMAGES } from "../../utils";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import LinesComp from "./LinesComp";

const ProjectsPage = ({ projects }) => {
  return (
    <section className="relative overflow-hidden">
      <LinesComp />
      <div className="m-20 md:my-28 lg:my-36 xl:my-44 2xl:mb-52 max-w-[1920px] mx-auto lg:px-[100px] px-[20px] relative">
        <h1 className="big-heading 3xl:mt-[146.4px] 3xl:mb-[164px] 2xl:mt-20 2xl:mb-36 xl:mt-16 xl:mb-28 lg:mb-24 md:mb-20 mt-14 mb-16">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 md:gap-x-11 md:gap-y-20 lg:gap-x-14 lg:gap-y-24 xl:gap-x-16 xl:gap-y-32 2xl:gap-x-[90px] 2xl:gap-y-40 gap-y-10">
          {projects.map((res) => (
            <ProjectsCard
              key={res.id}
              publicity={res.publicity}
              image={res.image}
              designer1={res.designer1}
              designer2={res.designer2}
              designerImage={DESIGNER_IMAGES}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
