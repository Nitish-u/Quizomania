import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home page/homePage";
import QuizMakerPage from "./pages/Quiz maker page/QuizMakerPage";
import MainPage from "./pages/Main page/MainPage";

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
      errorElement: (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="heading sm:text-9xl font-black text-5xl">404</div>
          <p>Page not found.</p>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
