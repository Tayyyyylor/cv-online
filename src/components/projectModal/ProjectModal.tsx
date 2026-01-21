import React, { useEffect } from "react";
import styles from "./ProjectModal.module.scss";
import classNames from "classnames/bind";
import { Badge } from "../atoms/badges/Badge";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}


const cx = classNames.bind(styles);

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {

    useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return project && (
   <div className={cx("modalBackdrop")} onClick={handleBackdropClick}>
      <div className={cx("modalContent")}>
        <div className={cx("modalHeader")}>
          <h2 className={cx("modalTitle")}>{project.title}</h2>
          <button
            className={cx("closeButton")}
            onClick={onClose}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>

        <div className={cx("modalBody")}>
          <div className={cx("section")}>
            <h3 className={cx("sectionTitle")}>Problématiques & objectifs</h3>
            <p className={cx("sectionText")}>
              {project.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus dolorum corporis magni hic praesentium sit, commodi ratione animi, fugit eligendi doloribus unde, molestias ducimus aut voluptatibus officia repellat perferendis!"}
            </p>
          </div>

          <div className={cx("section")}>
            <h3 className={cx("sectionTitle")}>Features clés</h3>
            <ul className={cx("featuresList")}>
              <li className={cx("featureItem")}>
                Interface responsive et moderne
              </li>
              <li className={cx("featureItem")}>
                Performance optimisée pour tous les appareils
              </li>
              <li className={cx("featureItem")}>
                Architecture évolutive et maintenable
              </li>
              <li className={cx("featureItem")}>
                Intégration avec des CMS headless
              </li>
            </ul>
          </div>

          <div className={cx("section")}>
            <h3 className={cx("sectionTitle")}>Technologies</h3>
            <div className={cx("badges")}>
              {project.badges.map((badge) => (
                <Badge key={badge} badge={badge} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
