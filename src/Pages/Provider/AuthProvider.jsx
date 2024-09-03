import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext("");
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //   const baseUrl = "http://localhost:5000";
  const baseUrl = "https://car-doctor-server-eight-sable.vercel.app";
  // Login By Google start
  const googleProvider = new GoogleAuthProvider();
  const loginByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Login By Google end

  // Registration By Email start
  const registrationByEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Registration By Email end

  // Login By Email start
  const loginByEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Login By Email end

  // Logout
  const Logout_ = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  // Logout

  // Check User start
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // return ()=>{
    //    return unSubscribe();
    // }
    return () => unSubscribe();
  }, []);
  // Check User end

  ///SuccessFully Toast Start
  const successfullToast = (write) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: write,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  ///UnSuccessfull Toast Start
  const unSuccessfullToast = (write) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: write,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  const authInfo = {
    baseUrl,
    user,
    loginByGoogle,
    registrationByEmail,
    loginByEmail,
    Logout_,
    loading,
    successfullToast,
    unSuccessfullToast,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
