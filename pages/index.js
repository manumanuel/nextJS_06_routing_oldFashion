import EventList from "../components/events/event-list";
//import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../components/helpers/api-utils";

function HomePage(props) {
  /*filter directly from connected db
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
   */
  /*pre-render using getStaticProps*/
  return <EventList items={props.featuredEvents} />;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800, // 30 minutes
  };
}

export default HomePage;
