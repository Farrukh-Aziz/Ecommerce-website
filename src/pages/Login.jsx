import React, { useState } from "react";
import { Form } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async(event) =>{
    event.preventDefault();

  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 ">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text text-3xl">{currentState}</p>
          <hr className="border-none h-[.5px]" />
        </div>
        {currentState === "Login" ? (
          " "
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
          />
        )}
        <input
          type="Email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 b border border-gray-800"
          placeholder="Enter your Password"
          required
        />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className="cursor-pointer">Forgot Password ?</p>
            {currentState === "Login" ? (
              <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
                {" "}
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState('Login')}
                className="cursor-pointer"
              >Login here</p>
            )}
         
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === "Login" ? "Sign in" : "Sgn Up"}</button>
      </form>
    </div>
  );
};

export default Login;
