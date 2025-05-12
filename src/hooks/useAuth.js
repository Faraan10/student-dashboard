import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // to persist user login
import { auth } from "../firebase"; // from firebase file

const useAuth = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => user();
  }, []);
  return { user, loading };
};

export default useAuth;
