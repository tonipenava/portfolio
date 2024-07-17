import githubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className="lg:flex lg:items-center lg:justify-center lg:flex-col flex flex-col justify-center items-center  w-screen  lg:h-[340px]  mt-10 ">
      <div className="lg:sticky bottom-0 w-screen lg:flex lg:items-center lg:justify-between lg:flex-col ">
        <div className=" lg:w-[80%] lg:flex lg:justify-center lg:items-center lg:flex-row flex items-center justify-center flex-col text-nowrap text-[#42446E] ">
          <div className="lg:w-[30dvw] text-3xl lg:flex lg:justify-start  font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ease-in-out pt-5  ">
            <h2 className="text-transparent lg:text-start text-center pb-5 ">
              Toni Penava
            </h2>
          </div>
          <div className="lg:w-[50dvw] lg:flex lg:justify-evenly lg:items-center lg:flex-row flex items-center justify-center flex-col gap-2  ">
            <p>toni.penava@gmail.com</p>
            <p>+387 63 144 067</p>

            <div className="lg:flex lg:justify-evenly lg:flex-row flex justify-center items-center gap-6 p-6">
              <a
                href="https://github.com/tonipenava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black block hover:underline"
              >
                <img src={githubIcon} alt="GitHub" className="w-20 h-20" />
              </a>
              <a
                href="https://www.linkedin.com/in/toni-penava-28aa08303/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black block hover:underline"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="w-20 h-20" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-evenly lg:items-center lg:flex-row flex items-center justify-center flex-col pt-5 border-t-2 border-tamnoplava lg:w-[80vw]">
          <div className="lg:w-[40vw] lg:flex lg:justify-start lg:gap-32 lg:items-center lg:flex-row flex items-center justify-center flex-col text-2xl font-semibold gap-4">
            {' '}
            <a href='#">Home</a href='></a>{' '}
            <a href='#about">About</a href='></a>{' '}
            <a href='#porfolio">Portfolio</a href='></a>{' '}
          </div>
          <div className="w-[40vw] text-center italic text-xl py-6">
            <p>Designed and built by Toni Penava </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
