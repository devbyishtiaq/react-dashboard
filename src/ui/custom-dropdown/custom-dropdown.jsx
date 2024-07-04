import React, { useState } from "react";

function CustomDropdown({ options = [], width = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <button
        type="button"
        className="custom-dropdown-toggle"
        onClick={toggleDropdown}
        style={{ color: "rgb(108,117,125)" }}
      >
        {selectedStatus}
      </button>
      <div
        className={`custom-dropdown-menu ${isOpen ? "show" : ""}`}
        style={{ minWidth: width ? `${width}` : "10rem" }}
      >
        {options?.map((status) => (
          <div
            key={status}
            className={`custom-dropdown-item ${
              selectedStatus === status ? "active" : ""
            }`}
            onClick={() => handleStatusChange(status)}
          >
            {status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomDropdown;
