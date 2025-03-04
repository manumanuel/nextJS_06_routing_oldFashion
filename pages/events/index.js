import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
//import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../components/helpers/api-utils";

function Event(props) {
  //const events = getAllEvents();
  const events = props.items;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Event Handler</title>
        <meta
          name="description"
          content="Helps to engage in various events depending on your character"
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: { items: events },
  };
}

export default Event;
