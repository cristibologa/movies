import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Page/Home.jsx";
import MainLayout from "./Page/MainLayout.jsx";
import Movies from "./Page/Movies.jsx";
import TVShows from "./Page/TVShows.jsx";
import MovieDetails from "./Page/MovieDetails.jsx";
import { useFetchTrending } from "./hooks/useFetchTrending.js";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  // const {
  //   data: allData,
  //   loading: loadingAll,
  //   error: errorAll,
  // } = useFetchTrending("all");

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

  const allData = [...movie, ...tv];
  const loadingAll = movieLoading && tvLoading;
  const errorAll = movieError && tvError;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home
              data={allData}
              loading={loadingAll}
              error={errorAll}
              textInput={textInput}
              handleChange={handleChange}
            />
          ),
        },
        {
          path: "movies",
          element: (
            <Movies
              data={movie}
              loading={movieLoading}
              error={movieError}
              textInput={textInput}
              handleChange={handleChange}
            />
          ),
        },
        {
          path: "tv",
          element: (
            <TVShows
              data={tv}
              loading={tvLoading}
              error={tvError}
              textInput={textInput}
              handleChange={handleChange}
            />
          ),
        },
        { path: "details/:id", element: <MovieDetails data={allData} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
