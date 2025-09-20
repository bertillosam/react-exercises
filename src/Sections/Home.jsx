import { useState } from "react";
import { X } from "lucide-react";
import FirstExercises from "../Components/FirstExercises";
import SecondExercises from "../Components/SecondExercises";
import logo from "../assets/linkedin.svg";
import face from "../assets/facebook.svg";

const Home = () => {
  const [reactExercises, setReactExercises] = useState(false);
  const [reactFirstExercises, setFirstReactExercises] = useState(false);
  const [activeExercises, setActiveExercises] = useState(null);
  const closeAll = () => {
    setReactExercises(false);
    setActiveExercises(null);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent leading-right">
          Hello! I'm Sam Bertillo
        </h1>

        <p className="text-primary text-lg mb-8 max-w-lg mx-auto">
          I’m a full-stack developer with hands-on experience in building
          responsive web applications using React.js and TailwindCSS. I enjoy
          turning complex ideas into clean, user-friendly interfaces and have a
          solid foundation in both front-end and back-end development. I’m
          always eager to learn new technologies and contribute to projects that
          require both creative problem-solving and technical execution.
        </p>
        <div className="flex justify-center space-x-4">
          <div>
            <button
              onClick={() => setReactExercises(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-400"
            >
              React Exercises
            </button>

            {reactExercises && (
              <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white backdrop-blur-md p-6 rounded-xl shadow-lg relative max-w-screen-sm w-full text-black">
                  <button
                    onClick={closeAll}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 hover:cursor-pointer"
                  >
                    <X size={20} />
                  </button>

                  <h2 className="text-xl font-semibold mb-2">
                    Collection of MiniProjects
                  </h2>
                  <div className="mb-4">
                    <button
                      onClick={() => setFirstReactExercises(true)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:animate-pulse hover:cursor-pointer active:bg-green-300"
                    >
                      Game
                    </button>
                    {reactFirstExercises && (
                      <div className="m-4 gap-4">
                        <FirstExercises />
                        <SecondExercises />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <a
            href="https://www.linkedin.com/in/sam-edward-bertillo-7729931ab/"
            className="bg-blue-500 text-white font-extrabold py-2 px-3 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) flex flex-col]"
          >
            Linked <img className="h-6" src={logo} />
          </a>
          <a
            href="https://www.facebook.com/BertilloSam/"
            className="bg-blue-500 font-extrabold rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) flex flex-col] "
          >
            <img className="h-10 hover:animate-spin" src={face} />
          </a>
          <a
            href="#contact"
            className="bg-background text-primary py-2 px-3 border-1 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-green-400 hover:text-black hover:animate-pulse"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
