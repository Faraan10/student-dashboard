import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // to persist user login
import { auth } from "../firebase"; // from firebase file

const useAuth = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => userData();
  }, []);
  return { user, loading };
};

export default useAuth;
