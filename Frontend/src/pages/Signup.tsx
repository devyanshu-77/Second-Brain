import React from "react";
import FormIntupt from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store/store";
import { signupUser } from "../store/user/userThunk";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignupData } from "../schemas/signupSchema";
import signupSchema from "../schemas/signupSchema";
import type { RootState } from "../store/store";

const Signup = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/signin");
  }
  const onSubmit: SubmitHandler<SignupData> = async (data) => {
    try {
      await dispatch(signupUser(data)).unwrap();
      navigate("/dashboard");
    } catch (err) {
      
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    clearErrors,
  } = useForm<SignupData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(signupSchema),
  });
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
            type="text"
            placeholder="Username"
            {...register("username", {
              onChange: () => clearErrors("username"), // Clear errors on change
            })}
          />
          {errors.username && dirtyFields.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
          <FormIntupt
            type="password"
            placeholder="Password"
            {...register("password", {
              onChange: () => clearErrors("password"), // Clear errors on change
            })}
          />
          {errors.password && dirtyFields.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
          <Button
            type="submit"
            variant="primary"
            text="Signup"
            size="lg"
            fullWidth={true}
          />
          {error.userError && (
            <p className="text-sm text-red-500">{error.userError}</p>
          )}
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
