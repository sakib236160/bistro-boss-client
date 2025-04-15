import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext)

  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="name"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600">This email is required</span>
                )}

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=(?:.*[A-Z]))(?=(?:.*[!@#$&*]))(?=(?:.*\d))(?=(?:.*[a-z]))/,
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">First Name Is Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">First Name Is Required</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-400">First Name Is Required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">First Name Is Required</p>
                )}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Sign Up"
                />
                <button>Sing Up</button>
              </fieldset>
            </form>
            <p><small>Already have an Account! <Link to={"/login"}>Login</Link> </small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
