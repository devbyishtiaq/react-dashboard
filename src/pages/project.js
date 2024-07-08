import React from "react";
import MainLayout from "../layouts/main-layout";
import PageHeader from "../components/homepage/project/page-header/page-header";
import ProjectStats from "../components/homepage/project/project-stats/project-stats";
import ProjectBudgetCard from "../components/homepage/project/project-budget-card/project-budget-card";
import ExpensesCard from "../components/homepage/project/expenses-card/expenses-card";
import EventsCard from "../components/homepage/project/events-card/events-card";
import HoursSpentCard from "../components/homepage/project/hours-spent-card/hours-spent-card";

const Project = () => {
  return (
    <MainLayout>
      <PageHeader />
      <ProjectStats />
      <ProjectBudgetCard />
      <div className="row">
        <ExpensesCard />
        <EventsCard />
      </div>
      <HoursSpentCard />
    </MainLayout>
  );
};

export default Project;
