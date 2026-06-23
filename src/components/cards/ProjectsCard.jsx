import React from "react";
import IconButton from "../ui/IconButton";
import { Link } from "react-router";

function ProjectsCard() {
  return (
    <div
      className="card flex-between"
      style={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        {/* Placeholder for Laptop Mockup */}
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="20"
            width="80"
            height="50"
            rx="4"
            stroke="var(--text-secondary)"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="70"
            width="100"
            height="5"
            rx="2"
            fill="var(--text-secondary)"
          />
          <circle
            cx="60"
            cy="45"
            r="10"
            stroke="var(--text-secondary)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        className="flex-between"
        style={{ width: "100%", alignItems: "flex-end" }}
      >
        <div>
          <p className="text-sm">SHOWCASE</p>
          <h2 className="text-lg">Projects</h2>
        </div>
        <Link to="/works">
          <IconButton />
        </Link>
      </div>
    </div>
  );
}

export default ProjectsCard;
