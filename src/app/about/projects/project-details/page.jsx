import Header from "@/app/components/Header";
import ProjectsDetail from "@/app/components/ProjectsDetail";

const page = () => {
  return (
    <div>
      <Header iconsColor="black" lines={true} />
      <ProjectsDetail />
    </div>
  );
};

export default page;
