import React, { useState } from "react";
import { motion } from "framer-motion";
import { stepsData } from "../mock_data/data";

const UserDashboard = () => {
  //local variables

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <h1>User Dashboard</h1> */}

      {/* steps */}
      <div className="flex py-5">
        {stepsData?.map((data, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col">
              <div className=" text-center">
                <p className="font-semibold">{data?.name}</p>
              </div>

              <div className="flex  items-center">
                <div className="bg-gray-800 h-[2px] w-full"></div>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`bg-gray-800 h-8 flex justify-center items-center  aspect-square rounded-full cursor-pointer active:scale-95 transition-all  ${
                    activeTab === index
                      ? "bg-white text-black border-black font-semibold  border-2 hover:bg-white"
                      : "text-white hover:bg-gray-700"
                  } `}
                >
                  <h1 className="">{index + 1}</h1>
                </button>
                <div className="bg-gray-800 h-[2px] w-full"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* create */}
      {activeTab === 0 && (
        <motion.div
          initial={{ x: "30%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`  py-5 bg-red-300 min-h-[90vh] w-screen flex justify-center items-center text-4xl`}
        >
          1 tala
        </motion.div>
      )}

      {/* share */}
      {activeTab === 1 && (
        <motion.div
          initial={{ x: "30%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`  py-5 bg-blue-300 min-h-[90vh] w-screen flex justify-center items-center text-4xl`}
        >
          2 tala
        </motion.div>
      )}

      {/* responses */}
      {activeTab === 2 && (
        <motion.div
          initial={{ x: "30%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`  py-5 bg-green-300 min-h-[90vh] w-screen flex justify-center items-center text-4xl`}
        >
          3 tala
        </motion.div>
      )}

      {/* analytics */}
      {activeTab === 3 && (
        <motion.div
          initial={{ x: "30%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`  py-5 bg-violet-300 min-h-[90vh] w-screen flex justify-center items-center text-4xl`}
        >
          4 tala
        </motion.div>
      )}
    </div>
  );
};

export default UserDashboard;
