import React from "react";
import FormIntupt from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { signupUser } from "../store/userSlice";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";


type FormData = {
  username: string;
  password: string;
};

const Signup = () => {
  const diapatch = useDispatch<AppDispatch>();
  const {loading, error, isAuthenticated} = useSelector((state: RootState) => state.user)
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/signin");
  }
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { username, password } = data;
    const userData = await diapatch(signupUser({ username, password }));
    console.log(userData)
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className=" w-85 rounded-md bg-white py-10 px-6 text-center">
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-6"
          action=""
        >
          <FormIntupt
            register={{ ...register("username") }}
            type="text"
            placeholder="Username"
          />
          {error && <p className="text-black">{error}</p>}
          <FormIntupt
            register={{ ...register("password") }}
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            variant="primary"
            text="Signup"
            size="lg"
            fullWidth={true}
          />
        </form>
        <p className="text-sm mt-6 text-slate-700">
          Already have an account?{" "}
          <button
            onClick={handleNavigate}
            className="text-blue-600 font-semibold cursor-pointer w-fit"
          >
            Signin.
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
