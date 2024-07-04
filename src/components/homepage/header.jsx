// src/components/Header.js
import React from "react";

const HomepageHeader = () => {
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="page-header-title">Dashboard</h1>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#inviteUserModal"
          >
            <i class="bi bi-person-plus-fill"></i> Invite users
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageHeader;
