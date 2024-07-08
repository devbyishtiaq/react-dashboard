import React, { useState } from "react";
import Header from "../ui/header/header";
import Sidebar from "../ui/sidebar/sidebar";
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState({
    dashboards: false,
    users: false,
    userProfile: false,
    account: false,
    ecommerce: false,
    projects: false,
    project: false,
    authentication: false,
    main: true,
  });
  return (
    <React.Fragment>
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        id="content"
        role="main"
        className="main"
        style={{
          paddingLeft: !collapsed.main ? "16.25rem" : "5.75rem",
          transition: "0.2s ease-in-out",
        }}
      >
        <div
          className="content container-fluid"
          style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
        >
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
