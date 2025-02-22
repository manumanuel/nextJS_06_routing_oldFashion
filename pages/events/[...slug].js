import { useRouter } from "next/router";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function FilteredEventPage() {
  const router = useRouter();
  const eventFilterParams = router.query.slug;
  const year = +eventFilterParams[0];
  const month = +eventFilterParams[1];
  if (!eventFilterParams || eventFilterParams.length == 0) {
    return <p>Invalid Filter. Please check your filter</p>;
  }

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p>Invalid Filter. Please adjust your filter</p>;
  }

  const filteredEvents = getFeaturedEvents({ year, month });

  return <EventList items={filteredEvents} />;
}
export default FilteredEventPage;
