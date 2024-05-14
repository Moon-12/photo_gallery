import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Picture from "./components/Pictures/Pictures";
import RootComp from "./components/RootComp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
