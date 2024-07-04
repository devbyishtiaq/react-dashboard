import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styles from "./monthly-expenses-card.module.css";

Chart.register(...registerables);

const MonthlyExpensesCard = () => {
  const [activeTab, setActiveTab] = useState("thisWeek");

  const thisWeekData = {
    labels: [
      "May 1",
      "May 2",
      "May 3",
      "May 4",
      "May 5",
      "May 6",
      "May 7",
      "May 8",
      "May 9",
      "May 10",
    ],
    datasets: [
      {
        label: "New",
        data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
        backgroundColor: "#377dff",
        borderColor: "#377dff",
        maxBarThickness: 10,
      },
      {
        label: "Overdue",
        data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
        backgroundColor: "#e7eaf3",
        borderColor: "#e7eaf3",
        maxBarThickness: 10,
      },
    ],
  };

  const lastWeekData = {
    labels: [
      "Apr 22",
      "Apr 23",
      "Apr 24",
      "Apr 25",
      "Apr 26",
      "Apr 27",
      "Apr 28",
      "Apr 29",
      "Apr 30",
      "Apr 31",
    ],
    datasets: [
      {
        label: "New",
        data: [120, 250, 300, 200, 300, 290, 350, 100, 125, 320],
        backgroundColor: "#377dff",
        borderColor: "#377dff",
        maxBarThickness: 10,
      },
      {
        label: "Overdue",
        data: [250, 130, 322, 144, 129, 300, 260, 120, 260, 245, 110],
        backgroundColor: "#e7eaf3",
        borderColor: "#e7eaf3",
        maxBarThickness: 10,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          color: "#e7eaf3",
          drawBorder: false,
          zeroLineColor: "#e7eaf3",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 100,
          fontSize: 12,
          color: "#97a4af",
          padding: 10,
          callback: function (value) {
            return "$" + value;
          },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          fontSize: 12,
          color: "#97a4af",
          padding: 5,
        },
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += "$" + context.parsed.y;
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="card h-100">
      <div className={`card-header-content-between ${styles.cardHeader}`}>
        <h4 className="card-header-title mb-2 mb-sm-0">Monthly expenses</h4>
        <ul
          className={`nav nav-segment nav-fill ${styles.customNavSegment}`}
          id="expensesTab"
          role="tablist"
        >
          <li className="nav-item">
            <button
              data-bs-toggle="tab"
              className={`nav-link ${activeTab === "thisWeek" ? "active" : ""}`}
              onClick={() => setActiveTab("thisWeek")}
            >
              This week
            </button>
          </li>
          <li className="nav-item">
            <button
              data-bs-toggle="tab"
              className={`nav-link ${activeTab === "lastWeek" ? "active" : ""}`}
              onClick={() => setActiveTab("lastWeek")}
            >
              Last week
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="row mb-4">
          <div className="col-sm mb-2 mb-sm-0">
            <div className="d-flex align-items-center">
              <span className="h1 mb-0">35%</span>
              <span className="text-success ms-2">
                <i className="bi-graph-up"></i> 25.3%
              </span>
            </div>
          </div>
          <div className="col-sm-auto align-self-sm-end">
            <div className="row fs-6 text-body">
              <div className="col-auto">
                <span className="legend-indicator bg-primary"></span> New
              </div>
              <div className="col-auto">
                <span
                  className="legend-indicator"
                  style={{ backgroundColor: "#e7eaf3" }}
                ></span>{" "}
                Overdue
              </div>
            </div>
          </div>
        </div>
        <div className={`chartContainer ${styles.chartContainer}`}>
          <Bar
            data={activeTab === "thisWeek" ? thisWeekData : lastWeekData}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpensesCard;
