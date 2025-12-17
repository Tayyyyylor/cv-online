/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  console.log("project :>> ", project);
  console.log("onClose :>> ", onClose);
  return <div>ProjectModal</div>;
};
