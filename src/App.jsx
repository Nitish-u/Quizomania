import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home page/homePage";
import QuizMakerPage from "./pages/Quiz maker page/QuizMakerPage";
import MainPage from "./pages/Main page/MainPage";
import PageNotFound from "./components/Page Not found/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "create",
          element: <QuizMakerPage />,
        },
      ],
      errorElement: <PageNotFound />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
