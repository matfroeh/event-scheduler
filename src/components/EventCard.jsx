const EventCard = ({ eventData }) => {

    const { title, description, date } = eventData;

    const dateCast = new Date(date);

    const dateFormatOptionWeekday = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const dateFormatted = new Intl.DateTimeFormat(
      "en-US",
      dateFormatOptionWeekday
    ).format(dateCast);

  return (
    <div className="card w-72 m-4 bg-base-200 h-72 shadow-xl hover:bg-accent cursor-pointer">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Date: {dateFormatted}</p>
      </div>
    </div>
  );
};

export default EventCard;
