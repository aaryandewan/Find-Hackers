import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export function signUpUserWithEmailAndPassword(auth, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed up (in services), user = ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Cannot sign up user", errorCode, errorMessage);
      // ..
    });
}
