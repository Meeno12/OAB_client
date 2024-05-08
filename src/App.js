import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("load", (e) => {
      const loadingScreen = document.getElementById("loading");
      loadingScreen.style.opacity = 0;
      setTimeout(() => {
        setInit(true)
        loadingScreen.remove();
      }, 300)
    })
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      dispatch({ type: "SET_USER", payload: true })
    }
  }, []);
  

  const hideNav = () => {
    if (["/auth/login", "/auth/register"].includes(location.pathname)) return true;
    return false;
  }


  return (
    <div>
      {!hideNav() && <Navbar />}
      <Outlet context={{init}}/>
    </div>
  );
}