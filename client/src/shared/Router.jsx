import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../auth/Login";
import App from "../App";
import Register from "../auth/Register";
import Header from "../component/Header";
import NewFoods from "../component/NewFoods";
import RecommendedFood from "../component/RecomendedFood";
import Service from "../component/Service";
import ServiceTwo from "../component/ServiceTwo";
import Special from "../component/Special";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "header",
        element: <Header/>
      },
      {
        path:"newfood",
        element: <NewFoods/>
      },
      {
        path: "recomendedfood",
        element: <RecommendedFood/>
      },
      {
        path: "service",
        element: <Service/>
      },
      {
        path: "servicetwo",
        element: <ServiceTwo/>
      },
      {
        path: "special",
        element: <Special/>
      }
    ],
  },
]);

export default router;
