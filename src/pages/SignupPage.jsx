import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerHandler } from "../services/employeeService";

const SignupPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    //profileImage: "",
    name: "",
    mobile: "",
    // email: "",
    password: "",
    confirmPassword: "",
    designation: "",
  };

  const designation = [
    "Software Programmer",
    "Software Developer",
    "PHP Developer",
    "Other",
  ];

  const validationSchema = Yup.object({
    // profileImage: Yup.string().required("Profile Image required !"),
    name: Yup.string().required("Name is required !"),
    // email: Yup.string()
    //   .email("Invalid email format !")
    //    .required("Email is required !"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile must be exactly 10 digits")
      .required("Mobile is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    designation: Yup.string().required("Disignation required !"),
  });

  const handleSubmit = async (values, actions) => {
    console.log("Form submitted:", values);
    actions.setSubmitting(false);
    const { username } = await registerHandler(values);
    alert(`Your User Name : ${username}`);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Image */}

      <Link
        to={"/"}
        className="fixed top-3 right-9 rounded-md cursor-pointer bg-green-500 px-3 py-3 font-semibold text-white hover:bg-green-700"
      >
        Home
      </Link>
      <div className="md:w-1/ relative">
        <img
          src="https://img.freepik.com/free-vector/internship-job-illustration_23-2148722413.jpg?size=626&ext=jpg&ga=GA1.1.1070736208.1691070650&semt=sph"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Signup Form */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-11/12 md:w-1/2">
          <h1 className="text-3xl font-semibold mb-6 mt-2 text-blue-500 ">
            Sign Up Form
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                {/* <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold">
                    Profile Image:
                  </label>
                  <Field
                    type="file"
                    name="profileImage"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.profileImage && formik.errors.profileImage
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="profileImage"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div> */}

                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold">
                    Full Name:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.fullName && formik.errors.fullName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold">
                    Mobile:
                  </label>
                  <Field
                    type="number"
                    name="mobile"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.mobile && formik.errors.mobile
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

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
                    className="text-red-500 text-sm"
                  />
                </div> */}

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
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block font-semibold">
                    Confirm Password:
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="country" className="block font-semibold">
                    Designation:
                  </label>
                  <Field
                    as="select"
                    name="designation"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      formik.touched.country && formik.errors.country
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    {designation.map((designation, index) => (
                      <option key={index} value={designation}>
                        {designation}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="designation"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full"
                >
                  Sign Up
                </button>

                <div className="mt-3">
                  <span>Already Account?</span>
                  <Link
                    to={"/login"}
                    className="text-lg font-semibold text-blue-500 hover:text-blue-900"
                  >
                    Go to Sign In
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

export default SignupPage;
