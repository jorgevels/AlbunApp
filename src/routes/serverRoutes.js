import Home from "../pages/Home";
import Photos from "../pages/photosX";
import Login from "../pages/Login";
import NotFount from "../components/NotFound";

const serverRoutes = (isLogged) => {
  return [
    {
      path: "/",
      exact: true,
      component: Home,
    },
    {
      path: "/photos",
      exact: true,
      component: isLogged ? Photos : Login,
      /* component: Photos, */
    },

    {
      name: "NotFount",
      component: NotFount,
    },
  ];
};

export default serverRoutes;
