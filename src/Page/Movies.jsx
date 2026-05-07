import Grid from "../components/Grid";
import Header from "../components/Header";

export default function MoviesPage({ data, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header title="Movies" />
      <Grid data={data} />
    </>
  );
}
