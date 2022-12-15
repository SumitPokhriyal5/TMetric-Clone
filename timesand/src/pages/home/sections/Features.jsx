import React from "react";
import MyActivity from "./features/MyActivity";
import MyTime from "./features/MyTime";
import ProjectSummary from "./features/ProjectSummary";
import TimeOffRequests from "./features/TimeOffRequests";

const Features = () => {
  return (
    <div>
      <MyTime />
      <MyActivity/>
      <ProjectSummary/>
      <TimeOffRequests/>
    </div>
  );
};

export default Features;
