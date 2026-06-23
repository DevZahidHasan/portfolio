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
        <img
          src="/project.png"
          alt="Projects Showcase"
          style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
        />
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
