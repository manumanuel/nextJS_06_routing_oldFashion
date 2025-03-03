export async function getAllEvents() {
  const result = await fetch(
    "https://nxt-sales-default-rtdb.firebaseio.com/events.json"
  );
  const data = await result.json();
  const events = [];
  for (const key in data) {
    const event = {
      id: key,
      ...data[key],
    };
    events.push(event);
  }
  return events;
}

export async function getFeaturedEvents() {
  const filteredEvents = await getAllEvents();
  return filteredEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const event = await getAllEvents();
  return event.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
