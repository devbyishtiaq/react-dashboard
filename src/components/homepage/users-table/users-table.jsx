import React from "react";
import CustomDropdown from "../../../ui/custom-dropdown/custom-dropdown";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import styles from "./users-table.module.css";
import img10 from "../../../assets/img/160x160/img10.jpg";
import img7 from "../../../assets/img/160x160/img7.jpg";
import img8 from "../../../assets/img/160x160/img8.jpg";

const data = [
  {
    fullName: "Anne Richard",
    avatar: img7, // Placeholder avatar URL
    status: "Successful",
    type: "Subscription",
    email: "anne@site.com",
    signedUp: "6 months ago",
    userId: "67326",
    isTopEndorsed: false,
  },
  {
    fullName: "Bob Dean",
    avatar: img8,
    status: "Successful",
    type: "Subscription",
    email: "bob@site.com",
    signedUp: "6 months ago",
    userId: "75470",
    isTopEndorsed: false,
  },
  {
    fullName: "Mark Colbert",
    avatar: img7,
    status: "Successful",
    type: "Subscription",
    email: "mark@site.com",
    signedUp: "6 months ago",
    userId: "78463",
    isTopEndorsed: false,
  },
  {
    fullName: "Clarice Boone",
    avatar: img10,
    status: "Successful",
    type: "Non-subscription",
    email: "clarice@site.com",
    signedUp: "6 months ago",
    userId: "23485",
    isTopEndorsed: false,
  },
  {
    fullName: "Amanda Harvey",
    avatar: img10,
    status: "Successful",
    type: "Unassigned",
    email: "amanda@site.com",
    signedUp: "1 year ago",
    userId: "67989",
    isTopEndorsed: true,
  },
  {
    fullName: "Sam Kart",
    avatar: img8,
    status: "Successful",
    type: "Non-subscription",
    email: "sam@site.com",
    signedUp: "1 year ago",
    userId: "57300",
    isTopEndorsed: true,
  },
  {
    fullName: "Chris Mathew",
    avatar: img7,
    status: "Successful",
    type: "Non-subscription",
    email: "chris@site.com",
    signedUp: "1 year ago",
    userId: "12569",
    isTopEndorsed: false,
  },
  {
    fullName: "Rachel Doe",
    avatar: img10,
    status: "Pending",
    type: "Unassigned",
    email: "rachel@site.com",
    signedUp: "6 months ago",
    userId: "95211",
    isTopEndorsed: true,
  },
];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ cell }) => {
      const row = cell.row.original;
      return (
        <a className="d-flex align-items-center" href="user-profile.html">
          <div className="flex-shrink-0">
            <div className="avatar avatar-sm avatar-circle">
              <img className="avatar-img" src={row.avatar} alt={row.fullName} />
            </div>
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="text-inherit mb-0">
              {row.fullName}
              {row.isTopEndorsed && (
                <i
                  className="bi-patch-check-fill text-primary ms-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Top endorsed"
                ></i>
              )}
            </h5>
          </div>
        </a>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell }) => {
      const status = cell.getValue();
      const statusClass = status.toLowerCase().replace(" ", "-");
      return (
        <div className={`status-indicator ${statusClass}`}>
          <span></span>
          {status}
        </div>
      );
    },
  },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "signedUp", header: "Signed Up" },
  { accessorKey: "userId", header: "User ID" },
];

const UsersTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const selectedRowCount = table.getSelectedRowModel().rows.length;

  return (
    <div className="card mb-3 mb-lg-5">
      <div className={`${styles.cardHeader}`}>
        <div className="row justify-content-between align-items-center flex-grow-1">
          <div className="col-md">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-header-title">Users</h4>
              <div
                id="datatableCounterInfo"
                style={{ display: selectedRowCount > 0 ? "block" : "none" }}
              >
                <div className="d-flex align-items-center">
                  <span className="fs-6 me-3">
                    <span id="datatableCounter">{selectedRowCount}</span>{" "}
                    Selected
                  </span>
                  <a
                    className="btn btn-outline-danger btn-sm"
                    href="/javascript:;"
                  >
                    <i className="tio-delete-outlined"></i> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="row align-items-sm-center">
              <div className="col-sm-auto">
                <div className="row align-items-center gx-0">
                  <div className="col">
                    <span className="text-secondary me-2">Status:</span>
                  </div>
                  <div className="col-auto">
                    <CustomDropdown
                      options={["All", "Successful", "Overdue", "Pending"]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="row align-items-center gx-0">
                  <div className="col">
                    <span className="text-secondary me-2">Signed up:</span>
                  </div>
                  <div className="col-auto">
                    <CustomDropdown
                      options={["All", "1 year ago", "6 months ago"]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md">
                <form>
                  <div
                    className={`input-group input-group-merge input-group-flush ${styles.headerSearchContainer}`}
                  >
                    <div className="input-group-prepend input-group-text">
                      <i className="bi bi-search"></i>
                    </div>
                    <input
                      type="search"
                      className={`form-control ${styles.headerSearchInput}`}
                      placeholder="Search users"
                      aria-label="Search users"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive datatable-custom">
        <table className="custom-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={`sortable ${
                      header.column.getIsSorted() === "asc"
                        ? "asc"
                        : header.column.getIsSorted() === "desc"
                        ? "desc"
                        : ""
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={
                      cell.column.id === "select" ? "checkbox-cell" : ""
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`card-footer ${styles.cardFooter}`}>
        <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
          <div className="col-sm mb-2 mb-sm-0">
            <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
              <span className="me-2">Showing:</span>
              <CustomDropdown options={["4", "8"]} width="4rem" />
              <span className="text-secondary me-2">of</span>
              <span id="datatableWithPaginationInfoTotalQty">17</span>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="d-flex justify-content-center justify-content-sm-end">
              <nav aria-label="Activity pagination"></nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
