import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "bootstrap-icons/font/bootstrap-icons.css";

const ExpensesCard = () => {
  const [selectedDataset, setSelectedDataset] = useState(0);

  const data = {
    labels: ["Marketing", "Bills", "Others"],
    datasets: [
      {
        data: [70000, 35000, 56856], // Adjusted values for better visual representation
        backgroundColor: ["#377dff", "#00c9db", "#e7eaf3"],
        borderWidth: 5,
        hoverBorderColor: "#fff",
      },
      {
        data: [75000, 11252, 45856], // Adjusted values for better visual representation
        backgroundColor: ["#377dff", "#00c9db", "#e7eaf3"],
        borderWidth: 5,
        hoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    cutoutPercentage: "80", // Adjusted for a more filled doughnut
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let value = context.raw;
            return `USD: $${value}`;
          },
        },
        intersect: false,
        mode: "index",
        displayColors: false,
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        caretPadding: 10,
        cornerRadius: 4,
        padding: 10,
        footerAlign: "center",
        footerColor: "#fff",
        footerFontStyle: "bold",
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    maintainAspectRatio: false, // Ensure chart resizes with its container
  };

  const handleToggleDataset = (datasetIndex) => {
    setSelectedDataset(datasetIndex);
  };

  return (
    <div className="col-lg-5 mb-3 mb-lg-5">
      <div className="card h-100">
        <div className="custom-card-header card-header-content-between">
          <h4 className="card-header-title">Expenses</h4>

          <ul className="nav nav-segment" id="expensesTab" role="tablist">
            <li className="nav-item" onClick={() => handleToggleDataset(0)}>
              <button
                className={`nav-link ${selectedDataset === 0 ? "active" : ""}`}
              >
                This week
              </button>
            </li>
            <li className="nav-item" onClick={() => handleToggleDataset(1)}>
              <button
                className={`nav-link ${selectedDataset === 1 ? "active" : ""}`}
              >
                Last week
              </button>
            </li>
          </ul>
        </div>

        <div className="card-body d-flex flex-column justify-content-center">
          <div
            className="chartjs-custom mb-3 mb-sm-5"
            style={{ height: "14rem", position: "relative" }}
          >
            <Doughnut
              data={{
                ...data,
                datasets: [data.datasets[selectedDataset]],
              }}
              options={options}
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-auto mb-3 mb-sm-0 text-center">
              <h4 className="card-title">$80,000.00</h4> {/* Updated value */}
              <span className="legend-indicator bg-primary"></span> Marketing
            </div>
            <div className="col-auto mb-3 mb-sm-0 text-center">
              <h4 className="card-title">$10,452.00</h4>
              <span className="legend-indicator bg-info"></span> Bills
            </div>
            <div className="col-auto text-center">
              <h4 className="card-title">$56,856.00</h4>
              <span className="legend-indicator bg-secondary"></span> Others
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesCard;
