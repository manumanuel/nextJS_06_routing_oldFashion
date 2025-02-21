import classes from "./event-item.module.css";
import button from "./ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button link={exploreLink}>Explore Event</button>
      </div>
    </li>
  );
}
export default EventItem;
