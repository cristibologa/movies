import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Page/Home.jsx";
import MainLayout from "./Page/MainLayout.jsx";
import Movies from "./Page/Movies.jsx";
import TVShows from "./Page/TVShows.jsx";
import MovieDetails from "./Page/MovieDetails.jsx";
import { useFetchTrending } from "./hooks/useFetchTrending.js";
import { useState, useEffect } from "react";
import WatchList from "./Page/WatchList.jsx";

function App() {
  const [textInput, setTextInput] = useState("");

  const [watchList, setWatchList] = useState(() => {
    const savedWatchList = localStorage.getItem("watchList");
    return savedWatchList ? JSON.parse(savedWatchList) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  function handleAddWatchList(item) {
    setWatchList((prev) => {
      const isDuplicate = prev.some(
        (existingItem) => existingItem.id === item.id,
      );
      if (isDuplicate) return prev;
      return [...prev, item];
    });
  }

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

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
        {
          path: "details/:id",
          element: (
            <MovieDetails
              data={allData}
              handleAddWatchList={handleAddWatchList}
            />
          ),
        },
        { path: "watch", element: <WatchList data={watchList} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
