import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [device, setDevice] = useState(768 >= window.innerWidth);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile1 = 768 >= window.innerWidth;
      if (isMobile1 !== device) {
        dispatch({ type: "SET_DEVICE", payload: isMobile1 });
        setDevice(isMobile1);
      }
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, [device]);

  useEffect(() => {
    const closeLoading = () => {
      console.log("test");
      const loadingScreen = document.getElementById("loading");
      loadingScreen.style.opacity = 0;
      setTimeout(() => {
        setInit(true);
        loadingScreen.remove();
      }, 300);
    };
    if (document.readyState === "complete") closeLoading();
    else window.addEventListener("load", closeLoading);
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      dispatch({ type: "SET_USER", payload: true });
    }
  }, []);

  const hideNav = () => {
    if (["/auth/login", "/auth/register"].includes(location.pathname))
      return true;
    return false;
  };

  return (
    <div>
      {!hideNav() && <Navbar />}
      <Outlet context={{ init }} />
    </div>
  );
}
