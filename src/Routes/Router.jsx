import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ViewDetails from "../shared/ViewDetails/ViewDetails";

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
          element: <ViewDetails></ViewDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/collage/${params.id}`)
        }
      ]
    },
  ]);

  export default router;