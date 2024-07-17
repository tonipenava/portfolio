import React from 'react';
import TechStack from './TechStack';
import { techImages } from '../constants/constants';
import Projects from './Projects';
interface HomeProps {
  textContent: {
    greeting: string;
    intro: string;
    name: string;
    description: string;
  };
  imageSrc: string;
}

const Home: React.FC<HomeProps> = ({ textContent, imageSrc }) => {
  return (
    <section id="home">
      <div className=" font-poppins h-screen lg:flex lg:justify-evenly lg:items-center lg:flex-row flex items-center justify-center flex-col ">
        <div className="p-4">
          <h1 className="lg:text-8xl text-5xl font-bold ">
            {textContent.greeting}
          </h1>
          <h2 className="lg:text-8xl text-5xl font-semibold ">
            {textContent.intro}
          </h2>
          <h2 className="lg:text-8xl text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 inline-block bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-in-out ">
            {textContent.name}
          </h2>
          <p className="lg:text-6xl text-5xl ">{textContent.description}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-green-500 rounded-full flex justify-center items-center max-w-[400px] min-w-[200px] w-[90%]">
          <img
            className="w-[90%] lg:w-[400px] max-w-[400px] min-w-[200px]  h-auto rounded-full p-1 hover:scale-95 transition-transform duration-300 ease-in-out z-0"
            src={imageSrc}
            alt="Toni Penava"
          />
        </div>
      </div>
      <TechStack images={techImages} />
      <Projects />
    </section>
  );
};

export default Home;
