import Grid from "../components/Grid";
import Header from "../components/Header";

export default function WatchList({ data }) {
  return (
    <>
      <Header title="Watch List" />
      {<Grid data={data} />}
    </>
  );
}
