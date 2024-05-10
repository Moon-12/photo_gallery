import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Picture from "./components/Pictures/Pictures";
import RootComp from "./components/RootComp";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/images/:type",
          element: <Picture />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
