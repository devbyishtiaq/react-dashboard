import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import img3 from "../../../../assets/img/160x160/img3.jpg";
import img5 from "../../../../assets/img/160x160/img5.jpg";
import img7 from "../../../../assets/img/160x160/img7.jpg";
import {
  default as img6,
  default as img8,
} from "../../../../assets/img/160x160/img8.jpg";
import img9 from "../../../../assets/img/160x160/img9.jpg";

const eventsThisWeek = [
  {
    time: "12:00 - 03:00 pm",
    title: "Weekly overview",
    date: "24 May, 2020",
    avatars: [img9, img3, "A", "S", img5],
  },
  {
    time: "04:30 - 04:50 pm",
    title: "Project tasks",
    date: "25 May, 2020",
    avatars: [img6, img7, "A"],
  },
  {
    time: "12:00 - 03:00 pm",
    title: "Monthly reports",
    date: "27 May, 2020",
    avatars: [img5, "B", img8, img9],
    color: "danger",
  },
  {
    time: "02:00 - 03:00 pm",
    title: "Monthly reports to the client",
    date: "29 May, 2020",
    avatars: [img5, "B", img8, img9],
    color: "warning",
  },
];

const eventsNextWeek = [
  {
    time: "04:30 - 04:50 pm",
    title: "Project tasks",
    date: "30 May, 2020",
    avatars: [img6, img7, "A"],
  },
  {
    time: "12:00 - 03:00 pm",
    title: "Weekly overview",
    date: "1 June, 2020",
    avatars: [img9, img3, "A", "S", img5],
  },
  {
    time: "02:00 - 03:00 pm",
    title: "Monthly reports to the client",
    date: "2 June, 2020",
    avatars: [img5, "B", img8, img9],
  },
  {
    time: "12:00 - 03:00 pm",
    title: "Monthly reports",
    date: "4 June, 2020",
    avatars: [img5, "B", img8, img9],
  },
];

const EventsCard = () => {
  const [activeTab, setActiveTab] = React.useState("this-week");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderEvents = (events) => {
    return events.map((event, index) => (
      <li className="list-group-item" key={index}>
        <a
          className={`list-group-item-action border-${
            event.color || "primary"
          }`}
          href="#"
        >
          <div className="row">
            <div className="col-sm mb-2 mb-sm-0">
              <h2 className="fw-normal mb-1">{event.time}</h2>
              <h5 className="text-inherit mb-0">{event.title}</h5>
              <span className="text-body small">{event.date}</span>
            </div>
            <div className="col-sm-auto align-self-sm-end">
              <div className="avatar-group avatar-group-sm avatar-circle">
                {event.avatars.map((avatar, index) => (
                  <span key={index} className="avatar">
                    {typeof avatar === "string" && avatar.length === 1 ? (
                      <span
                        className={`avatar avatar-soft-${
                          event.color || "primary"
                        }`}
                      >
                        <span className="avatar-initials">{avatar}</span>
                      </span>
                    ) : (
                      <img className="avatar-img" src={avatar} alt="Avatar" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </li>
    ));
  };

  return (
    <div className="col-lg-7 mb-3 mb-lg-5">
      <div className="card h-100">
        <div className="custom-card-header card-header-content-between">
          <h4 className="card-header-title">Events</h4>

          <ul className="nav nav-segment" id="eventsTab" role="tablist">
            <li
              className="nav-item"
              onClick={() => handleTabChange("this-week")}
            >
              <button
                className={`nav-link ${
                  activeTab === "this-week" ? "active" : ""
                }`}
              >
                This week
              </button>
            </li>
            <li
              className="nav-item"
              onClick={() => handleTabChange("next-week")}
            >
              <button
                className={`nav-link ${
                  activeTab === "next-week" ? "active" : ""
                }`}
                href="#"
              >
                Next week
              </button>
            </li>
          </ul>
        </div>

        <div className="card-body card-body-height">
          <div className="tab-content" id="eventsTabContent">
            <div
              className={`tab-pane fade show ${
                activeTab === "this-week" ? "active" : ""
              }`}
              id="this-week"
              role="tabpanel"
              aria-labelledby="this-week-tab"
            >
              <ul className="list-group list-group-flush list-group-start-bordered">
                {renderEvents(eventsThisWeek)}
              </ul>
            </div>
            <div
              className={`tab-pane fade show ${
                activeTab === "next-week" ? "active" : ""
              }`}
              id="next-week"
              role="tabpanel"
              aria-labelledby="next-week-tab"
            >
              <ul className="list-group list-group-flush list-group-start-bordered">
                {renderEvents(eventsNextWeek)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
