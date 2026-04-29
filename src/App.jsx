import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Page/Home.jsx";
import MainLayout from "./Page/MainLayout.jsx";
import Movies from "./Page/Movies.jsx";
import TVShows from "./Page/TVShows.jsx";
import MovieDetails from "./Page/MovieDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "tv", element: <TVShows /> },
      { path: "details", element: <MovieDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
