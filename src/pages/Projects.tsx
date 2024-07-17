import ProjectTile from '../components/ProjectTile';

const Projects: React.FC = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center flex-col gap-5 p-10 ">
      <h1 className="text-plava text-6xl font-bold">Projects</h1>
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-5">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  );
};
export default Projects;
