import React from "react";
import { Line } from "react-chartjs-2";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons
import styles from "./project-budget-card.module.css";
import copyicon from "../../../../assets/svg/illustrations/copy-icon.svg";
import printicon from "../../../../assets/svg/illustrations/print-icon.svg";
import excelicon from "../../../../assets/svg/brands/excel-icon.svg";
import pdficon from "../../../../assets/svg/brands/pdf-icon.svg";
import csvicon from "../../../../assets/svg/components/placeholder-csv-format.svg";

const ProjectBudgetCard = () => {
  const chartData = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60],
        backgroundColor: "rgba(55, 125, 255, 0.1)",
        borderColor: "rgba(55, 125, 255, 1)",
        borderWidth: 2,
        pointRadius: 0,
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(55, 125, 255, 1)",
        pointHoverRadius: 0,
        hoverBorderColor: "#fff",
        hoverBackgroundColor: "rgba(55, 125, 255, 1)",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42],
        backgroundColor: "rgba(0, 201, 219, 0.1)",
        borderColor: "rgba(0, 201, 219, 1)",
        borderWidth: 2,
        pointRadius: 0,
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(0, 201, 219, 1)",
        pointHoverRadius: 0,
        hoverBorderColor: "#fff",
        hoverBackgroundColor: "rgba(0, 201, 219, 1)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        grid: {
          color: "#e7eaf3",
          drawBorder: false,
          zeroLineColor: "#e7eaf3",
        },
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20,
          color: "#97a4af",
          font: {
            family: "Open Sans, sans-serif",
          },
          padding: 10,
          callback: (value) => value + "k",
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#97a4af",
          font: {
            family: "Open Sans, sans-serif",
          },
          padding: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}k`,
        },
        intersect: false,
        mode: "index",
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="card mb-3 mb-lg-5">
      <div className={`card-header-content-between ${styles.cardHeader}`}>
        <h6 className="card-subtitle mb-0">
          Project budget: <span className="h3 ms-sm-2">$150,000.00 USD</span>
        </h6>

        <div className="dropdown">
          <button
            type="button"
            className="btn btn-white btn-sm dropdown-toggle"
            id="usersExportDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi-download me-2"></i> Export
          </button>

          <div
            className="dropdown-menu dropdown-menu-sm-end"
            aria-labelledby="usersExportDropdown"
          >
            <span className="dropdown-header">Options</span>
            <button id="export-copy" className="dropdown-item" href="#">
              <img
                className="avatar avatar-xss avatar-4x3 me-2"
                src={copyicon}
                alt="Copy"
              />
              Copy
            </button>
            <button id="export-print" className="dropdown-item" href="#">
              <img
                className="avatar avatar-xss avatar-4x3 me-2"
                src={printicon}
                alt="Print"
              />
              Print
            </button>
            <div className="dropdown-divider"></div>
            <span className="dropdown-header">Download options</span>
            <button id="export-excel" className="dropdown-item" href="#">
              <img
                className="avatar avatar-xss avatar-4x3 me-2"
                src={excelicon}
                alt="Excel"
              />
              Excel
            </button>
            <button id="export-csv" className="dropdown-item" href="#">
              <img
                className="avatar avatar-xss avatar-4x3 me-2"
                src={csvicon}
                alt="CSV"
              />
              .CSV
            </button>
            <button id="export-pdf" className="dropdown-item" href="#">
              <img
                className="avatar avatar-xss avatar-4x3 me-2"
                src={pdficon}
                alt="PDF"
              />
              PDF
            </button>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className={`chartContainer ${styles.chartContainer}`}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBudgetCard;
