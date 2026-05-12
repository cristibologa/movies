import Grid from "../components/Grid";
import Header from "../components/Header";

export default function TVShows({
  data,
  loading,
  error,
  textInput,
  handleChange,
}) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(textInput.toLowerCase()),
  );

  return (
    <>
      <Header title="TV" handleChange={handleChange} />
      <Grid data={filteredData} />
    </>
  );
}
