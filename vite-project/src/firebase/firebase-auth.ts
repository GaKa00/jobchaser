// // Assuming you have `auth` exported from a separate file
// import auth from "./firebase-config"; // Adjust the path if necessary

// //Sign up func
// import { createUserWithEmailAndPassword } from "firebase/auth";

//  export const signUp = (email:string, password:string) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//      console.log(error.message)
//       // ..
//     });
// };

// // Sign in func
// import { signInWithEmailAndPassword } from "firebase/auth";

//  export const signIn = (email:string, password:string) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//     console.log(error.message)
//     });
// };

// // Observer user creds
// import { onAuthStateChanged } from "firebase/auth";

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in
//     const uid = user.uid;
//     const displayName = user.displayName; // Get display name if available
//     const email = user.email; // Get email
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
