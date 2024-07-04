import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Link } from "react-router-dom";

Chart.register(...registerables);

const StatsCard = ({ title, value, percentage, from, chartData }) => {
  const options = {
    scales: {
      y: { display: false },
      x: { display: false },
    },
    plugins: {
      tooltip: { intersect: false },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
      <Link className="card card-hover-shadow h-100">
        <div className="card-body">
          <h6 className="card-subtitle">{title}</h6>
          <div className="row align-items-center gx-2 mb-1">
            <div className="col-6">
              <h2 className="card-title text-inherit">{value}</h2>
            </div>
            <div className="col-6">
              <div className="chartjs-custom" style={{ height: "3rem" }}>
                <Line data={chartData} options={options} />
              </div>
            </div>
          </div>
          <span
            className={`badge ${
              parseFloat(percentage) > 0
                ? "bg-soft-success text-success"
                : "bg-soft-danger text-danger"
            }`}
          >
            <i
              className={`bi-${
                parseFloat(percentage) > 0 ? "graph-up" : "graph-down"
              }`}
            ></i>{" "}
            {percentage}%
          </span>
          <span className="text-body fs-6 ms-1">from {from}</span>
        </div>
      </Link>
    </div>
  );
};

export default StatsCard;
