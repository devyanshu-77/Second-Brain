import React from "react";
import FormIntupt from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleNavigate() {
    navigate("/signup");
  }
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className=" w-85 rounded-md bg-white py-10 px-6 text-center">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-6"
          action=""
        >
          <FormIntupt type="text" placeholder="Username" />
          <FormIntupt type="password" placeholder="Password" />
          <Button
            variant="primary"
            onclick={() => {
              console.log("hello");
            }}
            text="Signup"
            size="lg"
            fullWidth={true}
            loading={false}
          />
        </form>
        <p className="text-sm mt-6 text-slate-700">
          Don't have an account?{" "}
          <button
            onClick={handleNavigate}
            className="text-blue-600 font-semibold cursor-pointer w-fit"
          >
            Signup.
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signin;
