import React, { useState } from "react";
import { motion } from "framer-motion";
import { stepsData } from "../mock_data/data";
import { Link } from "react-router-dom";

const UserShareSurvey = () => {
  //local variables

  return (
    <div className="min-h-screen overflow-x-hidden">
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
                <Link
                  to={data?.link}
                  className={`bg-gray-800 h-8 flex justify-center items-center  aspect-square rounded-full cursor-pointer active:scale-95 transition-all  ${
                    index === 1
                      ? "bg-white text-black border-black font-semibold  border-2 hover:bg-white"
                      : "text-white hover:bg-gray-700"
                  } `}
                >
                  <h1 className="">{index + 1}</h1>
                </Link>
                <div className="bg-gray-800 h-[2px] w-full"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* share */}

      <motion.div
        initial={{ x: "30%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3 }}
        className={`  py-5 bg-blue-300 min-h-[90vh] w-screen flex justify-center items-center text-4xl`}
      >
        2 tala
      </motion.div>
    </div>
  );
};

export default UserShareSurvey;
