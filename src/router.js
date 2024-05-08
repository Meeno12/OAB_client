import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Fanart from "./pages/Fanart";
import Article from "./pages/Article";
import Music from "./pages/Music";
import FanartDetail from "./pages/FanartDetail";
import MusicDetail from "./pages/MusicDetail";
import UserPage from "./pages/UserPage";
import UserFanart from "./pages/UserFanart";
import UserMusic from "./pages/UserMusic";
import UploadFanart from "./pages/UploadFanart";
import UploadMusic from "./pages/UploadMusic";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth/login",
            element: <Login />
          },
          {
            path: "/auth/register",
            element: <Register />
          },
        ]
      },
      {
        path: "/fanart",
        element: <Fanart />
      },
      {
        path: "/fanart/:id",
        element: <FanartDetail />
      },
      {
        path: "/music",
        element: <Music />
      },
      {
        path: "/music/:album/:id",
        element: <MusicDetail />
      },
      {
        path: "/article",
        element: <Article />
      },
      {
        path: "/user/:handle",
        element: <UserPage />,
        children: [
          {
            path: "/user/:handle/",
            element: <UserFanart />
          },
          {
            path: "/user/:handle/fanart",
            element: <UserFanart />
          },
          {
            path: "/user/:handle/music",
            element: <UserMusic />
          },
        ]
      },
      {
        path: "/upload/fanart",
        element: <UploadFanart />
      },
      {
        path: "/upload/music",
        element: <UploadMusic />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;