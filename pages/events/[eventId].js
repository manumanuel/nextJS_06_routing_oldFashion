import { useRouter } from "next/router";
//import { getEventById } from "../../dummy-data";
import {
  getEventById,
  getAllEvents,
  getFeaturedEvents,
} from "../../components/helpers/api-utils";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";
import { Fragment } from "react";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";
//import { getFeaturedEvents } from "../../dummy-data";

function EventDetail(props) {
  /* get date from the connected db
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
   */

  /*get data through api for pre-render using getServersideProps*/
  const event = props.event;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>;
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  //console.log(context);
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetail;
