import React, { useEffect, useRef, useMemo } from "react";
import { Chart, registerables } from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import "chartjs-adapter-date-fns";
import moment from "moment";
import occhatting from "../../../../assets/svg/illustrations/oc-chatting.svg";
import img9 from "../../../../assets/img/160x160/img9.jpg";
import img3 from "../../../../assets/img/160x160/img3.jpg";
import img10 from "../../../../assets/img/160x160/img10.jpg";
import img8 from "../../../../assets/img/160x160/img8.jpg";

// Register the necessary components with Chart.js
Chart.register(...registerables, MatrixController, MatrixElement);

const HoursSpendCard = () => (
  <div className="card overflow-hidden">
    <CardHeader />

    <div className="card-body">
      <div
        className="chartjs-matrix-custom mb-3"
        style={{ minWidth: "100%", width: "700px" }}
      >
        <MatrixChart />
      </div>
      <ul id="matrixLegend" className="mb-0"></ul>
    </div>

    <hr className="my-0" />

    <div className="row">
      <div className="col-lg-4">
        <div className="card card-centered bg-light h-100 rounded-0 shadow-none">
          <div className="card-body text-center">
            <div className="mb-3">
              <img
                className="avatar avatar-xxl avatar-4x3"
                src={occhatting}
                alt="Description"
                data-hs-theme-appearance="default"
              />
            </div>
            <span className="display-3 d-block text-dark">256.4</span>
            <span className="d-block">
              &mdash; Total hours
              <span className="badge bg-soft-dark text-dark rounded-pill ms-1">
                +7 today
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="card-body card-body-height">
          <UserList />
        </div>
      </div>
    </div>
  </div>
);

const CardHeader = () => (
  <div className="custom-card-header card-header-content-between">
    <h4 className="card-header-title">
      Hours spent
      <i
        className="bi-patch-check-fill text-primary ms-1"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="This report is based on 100% of sessions."
      ></i>
    </h4>
  </div>
);

const generateHoursData = () => {
  const data = [];
  let dt = moment().subtract(365, "days").startOf("day");
  const end = moment().startOf("day");
  while (dt <= end) {
    data.push({
      x: dt.format("YYYY-MM-DD"),
      y: dt.format("e"),
      d: dt.format("YYYY-MM-DD"),
      v: Math.random() * 24,
    });
    dt = dt.add(1, "day");
  }
  return data;
};

const MatrixChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "matrix",
      data: {
        datasets: [
          {
            label: "Commits",
            data: generateHoursData(),
            width(c) {
              const a = c.chart.chartArea || {};
              return (a.right - a.left) / 70;
            },
            height(c) {
              const a = c.chart.chartArea || {};
              return (a.bottom - a.top) / 10; // Reduced from 12 to 10
            },
            backgroundColor: (ctx) => {
              const value = ctx.dataset.data[ctx.dataIndex].v;
              const alpha = value / 24; // Normalize to 0-1 range
              return `rgba(55, 125, 255, ${alpha})`;
            },
          },
        ],
      },
      options: {
        aspectRatio: 7, // Increased from 5 to 7 to make the chart shorter
        plugins: {
          legend: false,
          tooltip: {
            callbacks: {
              title: () => "",
              label: (item) => {
                const v = item.dataset.data[item.dataIndex];
                if (v.v.toFixed() > 0) {
                  return `<span class="fw-semibold">${v.v.toFixed()} hours</span> on ${
                    v.d
                  }`;
                } else {
                  return `<span class="fw-semibold">No time</span> on ${v.d}`;
                }
              },
            },
          },
        },
        scales: {
          y: {
            type: "time",
            offset: true,
            time: {
              unit: "day",
              round: "day",
              isoWeekday: 1,
              parser: "i",
              displayFormats: {
                day: "iiiiii",
              },
            },
            reverse: true,
            ticks: {
              font: { size: 12 },
              maxTicksLimit: 3, // Reduced from 5 to 3
              color: "rgba(22, 52, 90, 0.5)",
              maxRotation: 0,
              autoSkip: true,
            },
            grid: {
              display: false,
              drawBorder: false,
              tickLength: 0,
            },
          },
          x: {
            type: "time",
            position: "bottom",
            offset: true,
            time: {
              unit: "week",
              round: "week",
              isoWeekday: 1,
              displayFormats: {
                week: "MMM dd",
              },
            },
            ticks: {
              font: { size: 12 },
              maxTicksLimit: 5,
              color: "rgba(22, 52, 90, 0.5)",
              maxRotation: 0,
              autoSkip: true,
            },
            grid: {
              display: false,
              drawBorder: false,
              tickLength: 0,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={chartRef}
      className="js-chart-matrix"
      style={{ minHeight: "150px" }}
    ></canvas>
  );
};

const users = [
  {
    name: "Amanda Harvey",
    days: 38,
    hours: "45:12",
    tasks: 35,
    avatar: img10,
  },
  {
    name: "Sara Iwens",
    days: 15,
    hours: "24:06",
    tasks: 31,
    avatar: img9,
    soft: true,
  },
  {
    name: "David Harrison",
    days: 22,
    hours: "67:38",
    tasks: 76,
    avatar: img3,
  },
  {
    name: "Ella Lauda",
    days: 35,
    hours: "53:31",
    tasks: 42,
    avatar: img8,
  },
  {
    name: "Bob Dean",
    days: 5,
    hours: "15:38",
    tasks: 21,
    avatar: img9,
    soft: true,
  },
  {
    name: "Linda Bates",
    days: 14,
    hours: "16:29",
    tasks: 9,
    avatar: img8,
  },
];

const UserList = () => (
  <ul className="list-group list-group-flush list-group-no-gutters">
    {users.map((user, index) => (
      <li className="list-group-item" key={index}>
        <div className="row align-items-center">
          <div className="col-sm mb-3 mb-sm-0">
            <a
              className="d-flex align-items-center"
              href="@@autopath/user-profile.html"
            >
              <div className="flex-shrink-0">
                <div
                  className={`avatar avatar-sm ${
                    user.soft ? "avatar-soft-info" : ""
                  } avatar-circle`}
                >
                  <img
                    className="avatar-img"
                    src={user.avatar}
                    alt="Image Description"
                  />
                </div>
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="text-inherit">{user.name}</h5>
              </div>
            </a>
          </div>

          <div className="col">
            <span className="text-cap text-body small mb-0">Days</span>
            <span className="fw-semibold text-dark">{user.days}</span>
          </div>

          <div className="col">
            <span className="text-cap text-body small mb-0">Hours</span>
            <span className="fw-semibold text-dark">{user.hours}</span>
          </div>

          <div className="col">
            <span className="text-cap text-body small mb-0">Tasks</span>
            <span className="fw-semibold text-dark">{user.tasks}</span>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default HoursSpendCard;
