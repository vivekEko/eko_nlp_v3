import React, { useState } from "react";
import { motion } from "framer-motion";
import { responseData, stepsData } from "../mock_data/data";
import { Link } from "react-router-dom";

const UserResponseSurvey = () => {
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
                    index === 2
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
        className={`    min-h-[90vh] w-screen flex justify-center items-center text-4xl`}
      >
        {/* main body */}
        <div className="w-[80%] mx-auto mb-10 ">
          {/* all responses */}
          <div className="overflow-x-scroll  border rounded-lg ">
            {/* headings / question list */}
            <div className={` flex   `}>
              {responseData?.questions?.map(
                (questions_data, questions_index) => {
                  return (
                    <div
                      key={questions_index}
                      title={questions_data}
                      className="flex gap-2 text-sm text-gray-500 w-full min-w-[300px] bg-gray-100 p-2 py-5"
                    >
                      <h1>{questions_index + 1}.</h1>
                      <h1 className="truncate">{questions_data}</h1>
                    </div>
                  );
                }
              )}
            </div>

            <div className="min-h-[65vh] relative">
              {/* all answers  */}
              <div>
                {responseData?.answers?.map((answers_data, answers_index) => {
                  return (
                    <div className="flex" key={answers_index}>
                      {answers_data?.all_answers?.map(
                        (all_answers_data, all_answers_index) => {
                          return (
                            <div
                              key={all_answers_index}
                              className="flex gap-2 text-sm text-gray-800 w-full min-w-[300px] border-b p-2"
                            >
                              <h1 className="truncate">
                                {all_answers_data?.answer ? (
                                  all_answers_data?.answer
                                ) : (
                                  <p className="text-gray-400 ">No response</p>
                                )}
                              </h1>
                            </div>
                          );
                        }
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* rows and colums count */}
          <div className="bg-gray-100 rounded-b-lg  flex justify-end items-center gap-5 py-5 px-5 text-sm">
            <div className="flex gap-1 items-center ">
              <h1 className="text-gray-500">Rows : </h1>
              <h2 className=" text-black font-semibold">24</h2>
            </div>

            <div className="flex gap-1 items-center ">
              <h1 className="text-gray-500">Columns : </h1>
              <h2 className=" text-black font-semibold">30</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserResponseSurvey;
