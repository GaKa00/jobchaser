
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase-config";

function SignInForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Form Submitted: ", data);
    const { email, password } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in: ", user);
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Log in</button>
      </form>

      <Link to="/signup">Don't have an account? Sign Up</Link>
    </>
  );
}

export default SignInForm;












// import { useForm } from "react-hook-form"
// import { Link, useNavigate } from "react-router-dom";

// interface LoginForm {
//   email: string;
//   password: string;
// }

// function SignInForm() {
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginForm>(); // Specify the form data type

//   const formSubmit = (data: LoginForm) => {
//     console.log("Form Submitted: ", data);
//     // const { email, password } = data;

//     // Assuming signInWithEmailAndPassword is handled elsewhere
//     // signInWithEmailAndPassword(email, password)
//     //   .then((userCredential:LoginForm) => {
//     //     // Signed in
//     //     const user = userCredential;
//     //     console.log("User signed in: ", user);
//     //     navigate("/dashboard");
//     //   })
//     //   .catch((errors:string) => {
//     //     console.log(errors)
//     //   });

//     // For now, simulate successful sign-in
//     navigate("/dashboard");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(formSubmit)}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                 message: "Invalid email address",
//               },
//             })}
//           />
//           {errors.email && <span>{errors.email.message}</span>}
//         </div>

//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             id="password"
//             type="password"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 8,
//                 message: "Password must be at least 8 characters",
//               },
//             })}
//           />
//           {errors.password && <span>{errors.password.message}</span>}
//         </div>

//         <button type="submit">Log in</button>
//       </form>

//       <Link to="/signup">Don't have an account? Sign Up</Link>
//     </>
//   );
// }

// export default SignInForm;
