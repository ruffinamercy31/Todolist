// import signUpFormStyles from "./SignUpForm.module.css";
import { Formik } from "formik";
import * as Yup from "yup";

interface Props {
  handleActionChange: () => void;
}

const SignupForm = (props: Props) => {
  const { handleActionChange } = props;

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().required("Mobile is required"),
    email: Yup.string().email("Email is Invalid").required("Email is required"),
  });

  const handleSubmit = () => {};

  return (
    <div className="container-fluid shadow-lg p-5 m-5 bg-body rounded-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className="text-danger">{errors.name}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Enter your mobile number"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile && (
                <p className="text-danger">{errors.mobile}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-danger">{errors.email}</p>
              )}
            </div>
            <div className="container text-center mt-5">
              <button className="btn btn-primary btn-lg">Submit</button>
              <div className="container mt-4">
                <p /* className={signUpFormStyles.alternate_cta_caption} */>
                  Already have an account?
                </p>
                <a
                  href="#"
                  /*  className={signUpFormStyles.alternate_cta} */
                  onClick={handleActionChange}
                >
                  Sign in!
                </a>
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
