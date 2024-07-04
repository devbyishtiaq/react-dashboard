// src/components/TransactionsCard.js
import React from "react";
import {
  Chart as ChartJS,
  BubbleController,
  LinearScale,
  PointElement,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from "./transactions-card.module.css";

// Register the required chart components and plugins
ChartJS.register(BubbleController, LinearScale, PointElement);

const TransactionsCard = () => {
  const data = {
    datasets: [
      {
        label: "New",
        data: [{ x: 50, y: 65, r: 99 }],
        backgroundColor: "rgba(55, 125, 255, 0.9)",
        borderColor: "transparent",
      },
      {
        label: "Pending",
        data: [{ x: 46, y: 42, r: 65 }],
        backgroundColor: "rgba(100, 0, 214, 0.8)",
        borderColor: "transparent",
      },
      {
        label: "Failed",
        data: [{ x: 48, y: 15, r: 38 }],
        backgroundColor: "#00c9db",
        borderColor: "transparent",
      },
      {
        label: "Label 4",
        data: [{ x: 55, y: 2, r: 61 }],
        backgroundColor: "#4338ca",
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false, max: 100, beginAtZero: true },
      },
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false, max: 100, beginAtZero: true },
      },
    },
    plugins: {
      tooltip: false,
      legend: { display: false },
      datalabels: {
        color: "#fff",
        anchor: "center",
        align: "center",
        font: {
          weight: "500",
          size: 40,
        },
        formatter: (value, ctx) => ctx.dataset.data[ctx.dataIndex].r,
      },
    },
  };

  return (
    <div className="card h-100">
      <div className={`card-header-content-between ${styles.cardHeader}`}>
        <h4 className="card-header-title mb-2 mb-sm-0">Transactions</h4>
        <button className="btn btn-ghost-secondary btn-sm dropdown-toggle">
          <i className="bi-calendar-week"></i>
          <span className="js-daterangepicker-predefined-preview ms-1">
            Jul 1 - Jul 1, 2024
          </span>
        </button>
      </div>
      <div className="card-body">
        <div className="chartjs-custom mx-auto" style={{ height: "20rem" }}>
          <Bubble plugins={[ChartDataLabels]} data={data} options={options} />
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <span
              className="legend-indicator"
              style={{ backgroundColor: "rgba(55, 125, 255, 0.9)" }}
            ></span>{" "}
            New
          </div>
          <div className="col-auto">
            <span
              className="legend-indicator"
              style={{ backgroundColor: "rgba(100, 0, 214, 0.8)" }}
            ></span>{" "}
            Pending
          </div>
          <div className="col-auto">
            <span
              className="legend-indicator"
              style={{ backgroundColor: "#00c9db" }}
            ></span>{" "}
            Failed
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsCard;
