import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  // const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  // const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              {...register("name", { required: "Name is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* {errors.name && (
            <p className="text-red-600 my-1">{errors.name?.message}</p>
          )} */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: "Email is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {errors.email && (
            <p className="text-red-600 my-1">{errors.email?.message}</p>
          )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="*******"
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message: "Password must be 6 character long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {errors.password && (
            <p className="text-red-600 my-1">{errors.password?.message}</p>
          )}
          <input
            type="submit"
            className="btn btn-accent w-full mt-5"
            value="SignUp"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-2">
          New to Doctors Portal{" "}
          <Link className="text-secondary" to="/login">
            Already Have an Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
