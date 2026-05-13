import styles from "./Grid.module.scss";
import Card from "./Card";

export default function Grid({ data }) {
  // if (data.length === 0) {
  //   return "No data";
  // }
  return (
    <div className={styles.grid}>
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
}
