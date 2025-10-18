import React from "react";
import FormIntupt from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { signinUser } from "../store/user/userThunk";
import { useSelector } from "react-redux";

type FormData = {
  username: string;
  password: string;
};

const Signin = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/signup");
  }
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form data - ", data);
    try {
      await dispatch(signinUser(data)).unwrap();
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className=" w-85 rounded-md bg-white py-10 px-6 text-center">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-6"
          action=""
        >
          <FormIntupt
            register={register("username")}
            type="text"
            placeholder="Username"
          />
          <FormIntupt
            register={register("password")}
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
            Signup.
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signin;
