import React from "react";
import MainContent from "../components/homepage/main-content";
import Project from "../pages/project";

/**
 * Array of routes for the dashboard section.
 * Each route object contains information about the path and corresponding component.
 */
export const routes = [
  // public
  { path: "/", element: <MainContent /> },
  { path: "/project", element: <Project /> },
];
