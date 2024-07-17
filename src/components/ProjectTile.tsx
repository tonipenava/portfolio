import project1Image from '../assets/project1Image.jpg';
const ProjectTile = () => {
  return (
    <div>
      <div className="lg:w-[373px] bg-bijela shadow-2xl rounded-2xl hover:shadow-black transition ease-in-out delay-110 w-full max-w-md mx-auto">
        <div className="w-full">
          <img
            src={project1Image}
            alt="Project Dolac"
            className=" rounded-t-2xl"
          />
        </div>
        <div className="w-full font-poppins text-start flex justify-normal  flex-col gap-5 p-4">
          <h2 className="text-plava text-3xl font-semibold text-start">
            YT to Mp3 project
          </h2>
          <p className="text-siva font-extralight text-sm">
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>
          <p className="text-plava text-start">
            <b>Tech stack </b>: HTML , JavaScript, Bootstrap, VueJS
          </p>
          <div className="w-full flex justify-evenly items-center  h-full gap-2">
            <a
              href="https://sensational-daffodil-b09423.netlify.app/#/"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer hover:bg-siva hover:rounded-l-xl w-[50%] hover:transition-transform duration-300 ease-in-out hover:scale-105 h-full p-2"
            >
              Live preview
            </a>
            <a
              href="https://github.com/tonipenava/youtubemp3converter"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer hover:bg-siva hover:rounded-r-xl w-[50%] hover:transition-transform duration-300 ease-in-out hover:scale-105 h-full p-2"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
