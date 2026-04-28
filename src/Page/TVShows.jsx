import Grid from "../components/Grid";
import Header from "../components/Header";
import { useFetchTrending } from "../hooks/useFetchTrending";

export default function TVShows() {
  const { data, loading, error } = useFetchTrending("tv");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header title="TV" />
      <Grid data={data} />
    </>
  );
}
