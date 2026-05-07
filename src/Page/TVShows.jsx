import Grid from "../components/Grid";
import Header from "../components/Header";

export default function TVShows({ data, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header title="TV" />
      <Grid data={data} />
    </>
  );
}
