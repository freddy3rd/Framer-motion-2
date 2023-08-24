import React, { useEffect, useState } from "react";
import { reveal } from "../utils/animation";
import { motion } from "framer-motion";
import { projects } from "../data/project-data";

function Project_preview({ activePreview }) {
  const [Preview, setPreview] = useState("Responsive Message");

  useEffect(() => {
    setPreview(activePreview);
    console.log(activePreview);
  }, [Preview]);

  return (
    <>
      {projects.map((data) => {
        if (data.ProjectName === Preview) {
          return (
            <div
              key={data.ProjectName}
              className="preview-container w-full h-full bg-slate-400"
            >
              {data.ProjectName}
              {console.log(data)}
            </div>
          );
        }
      })}
    </>
  );
}

export default Project_preview;
