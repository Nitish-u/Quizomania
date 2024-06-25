import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home page/homePage";
import QuizMakerPage from "./pages/Quiz maker page/QuizMakerPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: (
        <div className="h-full flex justify-center items-center flex-col">
          <div className="heading text-9xl font-black">404</div>page not found!
        </div>
      ),
    },
    {
      path: "/create",
      element: <QuizMakerPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
