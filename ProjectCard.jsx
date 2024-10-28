import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const handleClick = (siteUrl) => {
    window.open(`https://github.com/StasBratanich/${siteUrl}`, "_blank");
  };
  return (
    <div
      className={styles.projectCardContainer}
      onClick={() => handleClick(props.url)}
    >
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <ul className={styles.skills}>
        {props.skills.map((skill, index) => (
          <li className={styles.skill}>
            <div className={styles.skillImg}>
              <img
                src={`https://skillicons.dev/icons?i=${skill
                  .toLowerCase()
                  .replace(" ", "")
                  .replace("++", "pp")}`}
                alt={skill}
                className={styles.skill}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.projectDescription}>{props.description}</div>
    </div>
  );
};

export default ProjectCard;
