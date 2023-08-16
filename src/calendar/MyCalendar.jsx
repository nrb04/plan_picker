import { useMemo, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 13),
    }),
    []
  );

  const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div>
      <DnDCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: "500px" }}
        defaultDate={defaultDate}
        draggableAccessor={(event) => true}
      />
      {selectedEvent && (
        <div>
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
