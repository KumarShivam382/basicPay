import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

const schema = z.object({
  firstname: z.string().min(1, {
    message: "* First name is required",
  }),
  lastname: z.string(),
  username: z.string().email(),
  password: z.string().min(8, {
    message: "* Password must be at least 8 characters long",
  }),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="mb-8 flex justify-center text-2xl font-medium  text-gray-900">
              Sign up
            </h1>
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-lg font-medium  text-gray-700"
            >
              First Name
            </label>
            <input
              {...register("firstname")}
              type="text"
              id="firstname"
              placeholder="Enter your First name"
              className="block text-md w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.firstname && (
              <div className="text-red-500">{errors.firstname.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-lg font-medium  text-gray-700"
            >
              Last Name
            </label>
            <input
              {...register("lastname")}
              type="text"
              id="lastname"
              placeholder="Enter your Last name"
              className="block text-md w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.lastname && (
              <div className="text-red-500">{errors.lastname.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-medium  text-gray-700"
            >
              Email
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              placeholder="Enter your email"
              className="block text-md w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="block text-md w-full px-4 py-3 mt-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="block w-full px-4 py-2 mt-10 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}

          <div className="mb-4 mt-1">
            <p className="text-m">
              Already have an account?{" "}
              <Link to="/Signin" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
