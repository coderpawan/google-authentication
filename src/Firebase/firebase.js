// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOpJ3cJHzIUKs93GMjTF6X7ga0m8609TU",
  authDomain: "authentication-6ea70.firebaseapp.com",
  projectId: "authentication-6ea70",
  storageBucket: "authentication-6ea70.appspot.com",
  messagingSenderId: "578113464643",
  appId: "1:578113464643:web:bf8d30f25d60b2141227f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

const provider = new GoogleAuthProvider();
export const SignInGoogle = () => {
  signInWithPopup(authentication, provider)
    .then((res) => {
      console.log(res);

      const username = res.user.displayName;
      const email = res.user.email;
      const profilePic = res.user.photoURL;

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((err) => {
      console.log(err);
    });
  //   setTimeout(() => {
  //     window.location.reload(false);
  //   }, 1000);
};
