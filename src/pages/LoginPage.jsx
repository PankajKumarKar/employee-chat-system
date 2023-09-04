import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../services/employeeService";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    //email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Usernmae is required !"),
    //email: Yup.string()
    //.email("Invalid email format")
    //.required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, actions) => {
    console.log("Form submitted:", values);
    actions.setSubmitting(false);
    const { name } = await loginHandler(values);
    if (name) navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Link
        to={"/"}
        className="fixed top-3 right-9 rounded-md cursor-pointer bg-green-500 px-3 py-3 font-semibold text-white hover:bg-green-700"
      >
        Home
      </Link>
      {/* Left Side: Image with Animation */}
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/young-man-working-laptop-computer-cartoon-vector_24797-2211.jpg?size=626&ext=jpg&ga=GA1.2.1070736208.1691070650&semt=sph"
            alt=""
            className=" w-1/2 animate-bounce hidden md:block"
          />
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="md:w-1/2 flex justify-center items-center h-screen">
        <div className="w-11/12 md:w-1/2">
          <h1 className="text-3xl font-semibold mb-6 text-blue-500 ">
            Sign In Form
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                {/* <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div> */}

                <div className="mb-4">
                  <label htmlFor="username" className="block font-semibold">
                    Username:
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.username && formik.errors.username
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block font-semibold">
                    Password:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
                  disabled={formik.isSubmitting}
                >
                  Login
                </button>
                <div className="mt-4">
                  <span>Are you new ?</span>
                  <Link
                    to="/signup"
                    className="text-blue-500 text-lg hover:text-blue-800 font-semibold cursor-pointer"
                  >
                    Go to Sign Up
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
