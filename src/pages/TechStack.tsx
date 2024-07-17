// TechStack.tsx
import React from 'react';

interface TechStackProps {
  images: { [key: string]: string };
}

const TechStack: React.FC<TechStackProps> = ({ images }) => {
  return (
    <section id="about">
      <div className=" font-poppins flex justify-center items-center">
        <div className="w-[70%] ">
          <div className="flex justify-center items-center flex-col gap-8">
            <h1 className="text-5xl font-bold text-[#42446E]">My Tech Stack</h1>
            <p className="text-xl font-semibold">
              Technologies I’ve been working with recently
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {Object.keys(images).map((key) => (
              <img
                key={key}
                src={images[key]}
                alt={key}
                className=" hover:scale-110 transition-all hover:translate-x-1 max-w-md mx-auto lg:w-32 md:w-24 sm:w-12 w-24"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
