import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // local variables
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="bg-white flex justify-center items-center min-h-screen ">
      <div className="bg-gray-200 p-5 rounded-lg min-w-[350px] ">
        <div className="p-2">
          <h1 className="text-center text-2xl font-semibold mb-5">EKO</h1>
        </div>

        <div className="space-y-5">
          <input
            ref={emailRef}
            className="block p-2 rounded-lg w-full"
            autoFocus
            type="text"
            placeholder="Email"
            onKeyDown={(e) => {
              if (e.code == "ArrowDown") {
                passwordRef.current.focus();
              }
            }}
          />
          <input
            ref={passwordRef}
            className="block p-2 rounded-lg w-full"
            type="password"
            placeholder="Password"
            onKeyDown={(e) => {
              if (e.code == "ArrowUp") {
                emailRef.current.focus();
              }
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/user_dashboard/create_survey");
            }}
            className="block p-2 text-center w-full rounded-lg bg-gray-700 hover:bg-gray-600 transition-all text-white active:scale-95"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
