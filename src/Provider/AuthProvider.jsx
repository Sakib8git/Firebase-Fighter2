import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  emil pass signUp
  const createWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   ----------update user

  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  //----------Email verifiacation-----------------

  const verifyMail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //  emil pass signIn
  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // pass reset
  const sendRestPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // google signin
  const googleProvider = new GoogleAuthProvider();
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // gitHub----------------
  const gitProvider = new GithubAuthProvider();
  const gitSignin = () => {
    return signInWithPopup(auth, gitProvider);
  };

  // signOut---------------
  const signOutFnc = () => {
    return signOut(auth);
  };

  //!   _________________________________________________
  const authData = {
    user,
    setUser,
    createWithEmail,
    updateUser,
    verifyMail,
    signInWithEmailAndPasswordFunc,
    googleSignin,
    signOutFnc,
    gitSignin,
    sendRestPass,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
