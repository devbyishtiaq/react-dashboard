// src/components/ImportDataCard.js
import React from "react";
import capsuleIcon from "../../../assets/svg/brands/capsule-icon.svg";
import mailchimpIcon from "../../../assets/svg/brands/mailchimp.svg";
import styles from "./import-data-card.module.css";

const ImportDataCard = () => {
  return (
    <div className="card h-100">
      <div className={`card-header-content-between ${styles.cardHeader}`}>
        <h4 className="card-header-title">Import data into Front Dashboard</h4>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
            id="reportsOverviewDropdown2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi-three-dots-vertical"></i>
          </button>
          <div
            className="dropdown-menu dropdown-menu-end mt-1"
            aria-labelledby="reportsOverviewDropdown2"
          >
            <span className="dropdown-header">Settings</span>
            <a className="dropdown-item" href="#">
              <i className="bi-share-fill dropdown-item-icon"></i> Share chart
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
        <p style={{ color: "#677788" }}>
          See and talk to your users and leads immediately by importing your
          data into the Front Dashboard platform.
        </p>
        <ul
          className={`list-group list-group-flush list-group-no-gutters ${styles.listGroup}`}
        >
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <h5 className={`card-title ${styles.cardTitle}`}>
              Import users from:
            </h5>
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  className="avatar avatar-xs avatar-4x3"
                  src={capsuleIcon}
                  alt="Capsule"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Capsule</h5>
                    <span className="d-block fs-6 text-body">Users</span>
                  </div>
                  <div className="col-auto">
                    <a
                      className="btn btn-primary btn-sm"
                      href="#"
                      title="Launch importer"
                      target="_blank"
                    >
                      Launch{" "}
                      <span className="d-none d-sm-inline-block">importer</span>
                      <i className="bi-box-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  className="avatar avatar-xs avatar-4x3"
                  src={mailchimpIcon}
                  alt="mail chimp"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Mailchimp</h5>
                    <span className="d-block fs-6 text-body">Users</span>
                  </div>
                  <div className="col-auto">
                    <a
                      className="btn btn-primary btn-sm"
                      href="#"
                      title="Launch importer"
                      target="_blank"
                    >
                      Launch{" "}
                      <span className="d-none d-sm-inline-block">importer</span>
                      <i className="bi-box-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  className="avatar avatar-xs avatar-4x3"
                  src={capsuleIcon}
                  alt="Capsule"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="mb-0">Capsule</h5>
                    <span className="d-block fs-6 text-body">Users</span>
                  </div>
                  <div className="col-auto">
                    <a
                      className="btn btn-primary btn-sm"
                      href="#"
                      title="Launch importer"
                      target="_blank"
                    >
                      Launch{" "}
                      <span className="d-none d-sm-inline-block">importer</span>
                      <i className="bi-box-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* Repeat similar blocks for other items */}
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <span className="small text-muted">
              Or you can{" "}
              <a className={`link ${styles.textMutedLink}`} href="#">
                sync data to Front Dashboard
              </a>{" "}
              to ensure your data is always up-to-date.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImportDataCard;
