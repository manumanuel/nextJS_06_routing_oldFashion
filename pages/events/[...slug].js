import { useRouter } from "next/router";
import { Fragment } from "react";
import { link } from "next/link";
import Head from "next/head";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventPage(props) {
  /*
  const router = useRouter();
  const eventFilterParams = router.query.slug;
  if (!eventFilterParams) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = eventFilterParams[0];
  const filteredMonth = eventFilterParams[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (!eventFilterParams || eventFilterParams.length == 0) {
    return (
      <ErrorAlert>
        <p>Invalid Filter. Please check your filter</p>;
      </ErrorAlert>
    );
  }

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <ErrorAlert>
        <p>Invalid Filter. Please adjust your filter</p>;
      </ErrorAlert>
    );
  }
  const date = new Date(numYear, numMonth - 1);

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
    if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </Fragment>
    );
  } 

   return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents} />;
    </Fragment>
  );
  */

  let pageHeadHandler = (
    <Head>
      <title>Apply Filter</title>
      <meta name="description" content="Apply Filter" />
    </Head>
  );

  if (!props.events || props.events.length === 0) {
    return (
      <Fragment>
        {pageHeadHandler}
        <ErrorAlert>
          <p>Invalid Filter. Please check your filter</p>;
        </ErrorAlert>
      </Fragment>
    );
  }

  if (props.hasError) {
    return (
      <Fragment>
        {pageHeadHandler}
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values</p>;
        </ErrorAlert>
      </Fragment>
    );
  }

  pageHeadHandler = (
    <Head>
      <title>Apply Filter</title>
      <meta
        name="description"
        content={`filter applied for the period of ${props.date.year}/${props.date.month}`}
      />
    </Head>
  );

  return (
    <Fragment>
      {pageHeadHandler}
      <ResultsTitle date={props.date}></ResultsTitle>
      <EventList items={props.events} />;
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  //console.log(filterData);
  if (!filterData) {
    return {
      props: { events: [] },
      // redirect: {
      //   destination: "/error",
      // },
    };
  }
  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: { events: filteredEvents, date: { year: numYear, month: numMonth } },
  };
}

export default FilteredEventPage;
