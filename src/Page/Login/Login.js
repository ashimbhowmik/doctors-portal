import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  // const location = useLocation();
  // const navigate = useNavigate();

  // const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required " })}
              placeholder=""
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
              {...register("password", {
                required: "Password is envaild",
                minLength: {
                  value: 6,
                  message: "Password at least 6 character",
                },
              })}
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600 my-1">{errors.password?.message}</p>
            )}
            <label className="label ">
              <span className="label-text">Forget Password</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full"
            value="Login"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="">
          New to Doctors Portal{" "}
          <Link className="text-secondary" to="/signup">
            Create New Account
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

export default Login;
