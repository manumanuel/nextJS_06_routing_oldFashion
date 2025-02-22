import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";
function Event() {
  const featuredEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    debugger;
    console.log(year);
    console.log(month);
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <ul>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </ul>
  );
}

export default Event;
