import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home page/homePage";
import QuizMakerPage from "./pages/Quiz maker page/QuizMakerPage";
import MainPage from "./pages/Main page/MainPage";
import PageNotFound from "./components/Page Not found/PageNotFound";
import EditProfile from "./pages/Edit Profile/EditProfile";

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
        {
          path: "editProfile",
          element: <EditProfile />
        }
      ],
      errorElement: <PageNotFound />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
