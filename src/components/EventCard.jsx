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
    <div className="card w-72 m-4 bg-base-200 h-72 shadow-xl overflow-hidden hover:bg-accent cursor-pointer">
      <div className="card-body  bg-cyan-100">
        <h2 className="text-teal-700 text-2xl font-bold card-title">{title}</h2>
        <p>{description}</p>
        <p>
          <span className="text-teal-700 font-semibold">Date:</span><br></br>
          {dateFormatted}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
