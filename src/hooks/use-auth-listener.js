/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// custom hook
export default function useAuthListener() {
  // to preserve the user state (logged in or logged out)
  // user object is stored in the localStorage of the browser
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  // for updating the firebase context based on the user state
  const { firebase } = useContext(FirebaseContext);

  // to be run when the app first starts up
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem(authUser);
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return {user};
}
