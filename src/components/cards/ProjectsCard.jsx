import React from "react";
import { useNavigate } from "react-router";
import IconButton from "../ui/IconButton";

function ProjectsCard() {
  const navigate = useNavigate();
  return (
    <div
      className="card flex-between"
      style={{ flexDirection: "column", alignItems: "flex-start", cursor: "pointer" }}
      onClick={() => navigate('/works')}
    >
      <div
        className="flex-center"
        style={{ flexGrow: 1, width: '100%', marginBottom: '1.5rem' }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.5 }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </div>
      
      <div className="flex-between" style={{ width: '100%', alignItems: 'flex-end' }}>
        <div>
          <p className="text-sm">SHOWCASE</p>
          <h2 className="text-lg">Projects</h2>
        </div>
        <IconButton />
      </div>
    </div>
  );
}

export default ProjectsCard;
