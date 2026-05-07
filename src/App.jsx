import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Page/Home.jsx";
import MainLayout from "./Page/MainLayout.jsx";
import Movies from "./Page/Movies.jsx";
import TVShows from "./Page/TVShows.jsx";
import MovieDetails from "./Page/MovieDetails.jsx";
import { useFetchTrending } from "./hooks/useFetchTrending.js";

function App() {
  const {
    data: allData,
    loading: loadingAll,
    error: errorAll,
  } = useFetchTrending("all");

  const {
    data: movie,
    loading: movieLoading,
    error: movieError,
  } = useFetchTrending("movie");

  const {
    data: tv,
    loading: tvLoading,
    error: tvError,
  } = useFetchTrending("tv");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home data={allData} loading={loadingAll} error={errorAll} />
          ),
        },
        {
          path: "movies",
          element: (
            <Movies data={movie} loading={movieLoading} error={movieError} />
          ),
        },
        {
          path: "tv",
          element: <TVShows data={tv} loading={tvLoading} error={tvError} />,
        },
        { path: "details/:id", element: <MovieDetails data={movie} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
