import Grid from "../components/Grid";
import Header from "../components/Header";

export default function MoviesPage({
  data,
  loading,
  error,
  textInput,
  handleChange,
}) {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(textInput.toLowerCase()),
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header
        title="Movies"
        textInput={textInput}
        handleChange={handleChange}
      />
      <Grid data={filteredData} />
    </>
  );
}
