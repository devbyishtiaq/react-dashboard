import React, { useEffect, useRef, useState } from "react";

const ProjectStats = () => {
  return (
    <div className="row">
      <Card
        iconClass="bi-receipt"
        title="Spent"
        value="-$71,431.00 USD"
        progress={54}
      />
      <Card
        iconClass="bi-bar-chart"
        title="Progress"
        value={
          <span className="fs-5 text-success">
            <i className="tio-trending-up"></i> 1.7%
          </span>
        }
        progress={80}
      />
      <Card
        iconClass="bi-check2-circle"
        title="Tasks closed"
        value={
          <>
            79
            <span className="badge bg-soft-dark text-dark rounded-pill ms-1">
              +4 today
            </span>
          </>
        }
        progress={67}
      />
      <Card iconClass="bi-award" title="Goals" value="41/100" progress={41} />
    </div>
  );
};

export default ProjectStats;

export const Card = ({ iconClass, title, value, progress }) => {
  const circleRef = useRef(null);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      const animationDuration = 1400; // 1.4 seconds
      const stepTime = 20; // Update every 20ms
      const steps = animationDuration / stepTime;
      const stepValue = progress / steps;

      let currentStep = 0;

      const animationInterval = setInterval(() => {
        currentStep++;
        const currentProgress = Math.min(stepValue * currentStep, progress);

        // Update circle animation
        const offset = ((100 - currentProgress) / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        // Update text animation
        setAnimatedPercentage(Math.round(currentProgress));

        if (currentStep >= steps) {
          clearInterval(animationInterval);
        }
      }, stepTime);

      return () => clearInterval(animationInterval);
    }
  }, [progress]);

  const radius = 20;
  const circumference = radius * 2 * Math.PI;

  return (
    <div className="col-sm-6 col-xl-3 mb-3 mb-xl-6">
      <div className="card card-sm h-100">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className={`bi ${iconClass} nav-icon`}></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-1">{title}</h4>
                  <span className="d-block">{value}</span>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="circles-chart">
                <svg width="50" height="50">
                  {/* Background circle */}
                  <circle
                    cx="25"
                    cy="25"
                    r={radius}
                    stroke="#E7EAF3"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    ref={circleRef}
                    className="circle"
                    cx="25"
                    cy="25"
                    r={radius}
                    stroke="rgb(55, 125, 255)"
                    strokeWidth="3"
                    fill="none"
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: circumference,
                    }}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fill="rgb(55, 125, 255)"
                  >
                    {animatedPercentage}%
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
