const About: React.FC = () => {
  return (
    <section id="about">
      <div className="lg:pt-10 lg:w-screen lg:flex lg:justify-evenly lg:items-center lg:gap-8 flex items-center justify-center flex-col m-2 w-screen">
        <div className="  lg:flex lg:flex-col gap-8 w-[80%] ">
          {' '}
          <h1 className="text-[#42446E] text-4xl font-bold text-start">
            About Me
          </h1>
          <p>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </p>
        </div>
        <div className="lg:flex lg:flex-col gap-8 w-[80%]">
          {' '}
          <h1 className="text-[#42446E] text-4xl font-bold">Work Experience</h1>
          <ul>
            <li>
              <div>
                <h2>Freelance Web Developer</h2>
                <p></p>
              </div>
            </li>
            <li>Web Development Intern</li>
            <li>SEO / SEM Specialist</li>
          </ul>
        </div>
        <div className=" lg:flex lg:flex-col gap-8 w-[80%]">
          {' '}
          <h1 className="text-[#42446E] text-4xl font-bold">Education</h1>
          <p>T his is the About page.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
