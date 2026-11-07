import { Link } from "react-router-dom";
import { imageUrl, type Project } from "../types/content";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const cover = imageUrl(project.coverUrl);

        return (
          <article className="project-card" key={project.slug}>
            <div className="project-card__image">
              <Link to={`/projects/${project.slug}`} aria-label={project.title}>
                {cover && <img src={cover} alt="" loading="lazy" />}
              </Link>
            </div>
            <div className="project-card__meta">
              <div>
                <h3>
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                {project.description && <p>{project.description}</p>}
              </div>
              <span className="project-card__arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            {project.categories?.length > 0 && (
              <ul className="tag-list" aria-label="Project categories">
                {project.categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  );
}
