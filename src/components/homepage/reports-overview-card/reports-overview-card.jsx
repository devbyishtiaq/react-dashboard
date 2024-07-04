// src/components/ReportsOverviewCard.js
import React from "react";
import styles from "./reports-overview-card.module.css";

const ReportsOverviewCard = () => {
  return (
    <div className="card h-100">
      <div className={`card-header-content-between ${styles.cardHeader}`}>
        <h4 className="card-header-title">Reports overview</h4>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
            id="reportsOverviewDropdown1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi-three-dots-vertical"></i>
          </button>
          <div
            className="dropdown-menu dropdown-menu-end mt-1"
            aria-labelledby="reportsOverviewDropdown1"
          >
            <span className="dropdown-header">Settings</span>
            <a className="dropdown-item" href="#">
              <i className="bi-share-fill dropdown-item-icon"></i> Share reports
            </a>
            <a className="dropdown-item" href="#">
              <i className="bi-download dropdown-item-icon"></i> Download
            </a>
            <a className="dropdown-item" href="#">
              <i className="bi-alt dropdown-item-icon"></i> Connect other apps
            </a>
            <div className="dropdown-divider"></div>
            <span className="dropdown-header">Feedback</span>
            <a className="dropdown-item" href="#">
              <i className="bi-chat-left-dots dropdown-item-icon"></i> Report
            </a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <span className="h1 d-block mb-4">$7,431.14 USD</span>
        <div className="progress rounded-pill mb-2">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Gross value"
          ></div>
          <div
            className="progress-bar opacity-50"
            role="progressbar"
            style={{ width: "33%" }}
            aria-valuenow="33"
            aria-valuemin="0"
            aria-valuemax="100"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Net volume from sales"
          ></div>
          <div
            className="progress-bar opacity-25"
            role="progressbar"
            style={{ width: "9%" }}
            aria-valuenow="9"
            aria-valuemin="0"
            aria-valuemax="100"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="New volume from sales"
          ></div>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <span>0%</span>
          <span>100%</span>
        </div>
        <div className="table-responsive">
          <table className="table table-lg table-nowrap card-table mb-0">
            <tbody>
              <tr>
                <th scope="row">
                  <span className="legend-indicator bg-primary"></span>Gross
                  value
                </th>
                <td>$3,500.71</td>
                <td>
                  <span className="badge bg-soft-success text-success">
                    +12.1%
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="legend-indicator bg-primary opacity-50"></span>
                  Net volume from sales
                </th>
                <td>$2,980.45</td>
                <td>
                  <span className="badge bg-soft-warning text-warning">
                    +6.9%
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="legend-indicator bg-primary opacity-25"></span>
                  New volume from sales
                </th>
                <td>$950.00</td>
                <td>
                  <span className="badge bg-soft-danger text-danger">
                    -1.5%
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="legend-indicator"></span>Other
                </th>
                <td>32</td>
                <td>
                  <span className="badge bg-soft-success text-success">
                    1.9%
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsOverviewCard;
