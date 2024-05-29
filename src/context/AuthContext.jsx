import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "../firebase/Firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const value = {
    currUser,
    setCurrUser,
    signWithGoogle,
    logOut,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrUser(user);
      setLoading(false);
    });

    return unsubscribe;
  });
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
