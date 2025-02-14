import Header from '../../../../components/Header'
import ProjectsDetail from '../../../../components/projects/ProjectsDetail'

const page = () => {
  return (
    <div>
      <Header iconsColor="black" lines={true} />
      <ProjectsDetail />
    </div>
  );
};

export default page;
