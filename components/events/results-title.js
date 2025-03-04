import Button from "../ui/button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;
  //console.log(date);

  const humanReadableDate = new Date(
    date.year,
    date.month - 1,
    1
  ).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  console.log(humanReadableDate);

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
