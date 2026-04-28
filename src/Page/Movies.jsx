import Grid from "../components/Grid";
import Header from "../components/Header";
import { useFetchTrending } from "../hooks/useFetchTrending";

export default function MoviesPage() {
  const { data, loading, error } = useFetchTrending("movie");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header title="Movies" />
      <Grid data={data} />
    </>
  );
}
