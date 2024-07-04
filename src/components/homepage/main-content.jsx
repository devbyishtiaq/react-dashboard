import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import HomepageHeader from "./header";
import StatsCard from "./stats-card";
import ImportDataCard from "./import-data-card/import-data-card";
import MonthlyExpensesCard from "./import-data-card/monthly-expenses-card/monthly-expenses-card";
import UsersTable from "./users-table/users-table";
import TransactionsCard from "./transactions-card/transactions-card";
import ReportsOverviewCard from "./reports-overview-card/reports-overview-card";
import Header from "../../ui/header/header";
import Sidebar from "../../ui/sidebar/sidebar";

Chart.register(...registerables);

const chartDataTotalUsers = {
  labels: [
    "1 May",
    "2 May",
    "3 May",
    "4 May",
    "5 May",
    "6 May",
    "7 May",
    "8 May",
    "9 May",
    "10 May",
    "11 May",
    "12 May",
    "13 May",
    "14 May",
    "15 May",
    "16 May",
    "17 May",
    "18 May",
    "19 May",
    "20 May",
    "21 May",
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
  ],
  datasets: [
    {
      data: [
        21, 20, 24, 20, 18, 17, 15, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40,
        60, 90, 90, 90, 85, 70, 75, 70, 30, 30, 30, 50, 72,
      ],
      borderColor: "#377dff",
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const chartDataSessions = {
  labels: [
    "1 May",
    "2 May",
    "3 May",
    "4 May",
    "5 May",
    "6 May",
    "7 May",
    "8 May",
    "9 May",
    "10 May",
    "11 May",
    "12 May",
    "13 May",
    "14 May",
    "15 May",
    "16 May",
    "17 May",
    "18 May",
    "19 May",
    "20 May",
    "21 May",
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
  ],
  datasets: [
    {
      data: [
        21, 20, 24, 20, 18, 17, 15, 17, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90,
        90, 90, 85, 100, 120, 120, 120, 100, 90, 75, 75, 75, 90,
      ],
      borderColor: "#377dff",
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const chartDataAvgClickRate = {
  labels: [
    "1 May",
    "2 May",
    "3 May",
    "4 May",
    "5 May",
    "6 May",
    "7 May",
    "8 May",
    "9 May",
    "10 May",
    "11 May",
    "12 May",
    "13 May",
    "14 May",
    "15 May",
    "16 May",
    "17 May",
    "18 May",
    "19 May",
    "20 May",
    "21 May",
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
  ],
  datasets: [
    {
      data: [
        25, 18, 30, 31, 35, 35, 60, 60, 60, 75, 21, 20, 24, 20, 18, 17, 15, 17,
        30, 120, 120, 120, 100, 90, 75, 90, 90, 90, 75, 70, 60,
      ],
      borderColor: "#377dff",
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const chartDataPageviews = {
  labels: [
    "1 May",
    "2 May",
    "3 May",
    "4 May",
    "5 May",
    "6 May",
    "7 May",
    "8 May",
    "9 May",
    "10 May",
    "11 May",
    "12 May",
    "13 May",
    "14 May",
    "15 May",
    "16 May",
    "17 May",
    "18 May",
    "19 May",
    "20 May",
    "21 May",
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
  ],
  datasets: [
    {
      data: [
        21, 20, 24, 15, 17, 30, 30, 35, 35, 35, 40, 60, 12, 90, 90, 85, 70, 75,
        43, 75, 90, 22, 120, 120, 90, 85, 100, 92, 92, 92, 92,
      ],
      borderColor: "#377dff",
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const MainContent = () => {
  const [collapsed, setCollapsed] = useState({
    dashboards: true,
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
          <HomepageHeader />
          <div className="row">
            <StatsCard
              title="Total Users"
              value="72,540"
              percentage="12.5"
              from="70,104"
              chartData={chartDataTotalUsers}
            />
            <StatsCard
              title="Sessions"
              value="29.4%"
              percentage="1.7"
              from="29.1%"
              chartData={chartDataSessions}
            />
            <StatsCard
              title="Avg. Click Rate"
              value="56.8%"
              percentage="-4.4"
              from="61.2%"
              chartData={chartDataAvgClickRate}
            />
            <StatsCard
              title="Pageviews"
              value="92,913"
              percentage="0.0"
              from="2,913"
              chartData={chartDataPageviews}
            />
          </div>
          <div className="row">
            <div className="col-lg-5 mb-3 mb-lg-5">
              <ImportDataCard />
            </div>
            <div className="col-lg-7 mb-3 mb-lg-5">
              <MonthlyExpensesCard />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <UsersTable />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <TransactionsCard />
            </div>
            <div className="col-lg-6">
              <ReportsOverviewCard />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainContent;
