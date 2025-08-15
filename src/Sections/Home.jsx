import { useState } from "react";
import { X } from "lucide-react";
import FirstExercises from "../Components/FirstExercises";

const Home = () => {
  const [reactExercises, setReactExercises] = useState(false);
  const [reactFirstExercises, setFirstReactExercises] = useState(false);
  const closeAll = () => {
    setReactExercises(false);
    setFirstReactExercises(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
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
                {reactFirstExercises && <FirstExercises />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
