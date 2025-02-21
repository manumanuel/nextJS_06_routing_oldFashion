import EventList from "../../components/event-list";
import { getFeaturedEvents } from "../../dummy-data";
function Event() {
  const featuredEvents = getFeaturedEvents();
  return (
    <ul>
      <EventList items={featuredEvents} />
    </ul>
  );
}

export default Event;
