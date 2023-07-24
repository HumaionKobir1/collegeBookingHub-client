import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ViewDetails from "../shared/ViewDetails/ViewDetails";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Collage from "../pages/Collage/Collage";
import Admission from "../pages/Admission/Admission";
import MyCollage from "../pages/MyCollage/MyCollage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/collage/${params.id}`)
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/collage',
          element: <Collage></Collage>
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/myCollage',
          element: <MyCollage></MyCollage>
        }
      ]
    },
  ]);

  export default router;