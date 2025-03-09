import { Fragment } from "react";
import Head from "next/head";
import EventList from "../components/events/event-list";
//import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../components/helpers/api-utils";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
  /*filter directly from connected db
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
   */
  /*pre-render using getStaticProps*/
  return (
    <Fragment>
      <Head>
        <title>Events Handler</title>
        <meta
          name="description"
          content="Helps to engage in various events depending on your character"
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.featuredEvents} />
    </Fragment>
  );
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
