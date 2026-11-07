import { Link, useParams } from "react-router-dom";
import { projectsFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { projectDetailQuery } from "../lib/sanity";
import { imageUrl, type Project } from "../types/content";

export default function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const query = projectDetailQuery.replace("$slug", JSON.stringify(slug));
  const fallback = projectsFallback.find((project) => project.slug === slug) ?? null;
  const project = useSanityContent<Project | null>(query, fallback);
  const cover = imageUrl(project?.coverUrl);

  if (!project) {
    return (
      <main className="empty-page">
        <p className="eyebrow">Projects</p>
        <h1>Project not found.</h1>
        <Link className="text-link" to="/projects">
          Back to projects <span aria-hidden="true">↗</span>
        </Link>
      </main>
    );
  }

  return (
    <article className="project-detail">
      <header className="project-detail__heading">
        <Link className="text-link" to="/projects">
          ← All projects
        </Link>
        <h1>{project.title}</h1>
        {project.description && <p>{project.description}</p>}
      </header>
      {cover && <img className="project-detail__cover" src={cover} alt="" />}
      {project.gallery && project.gallery.length > 0 && (
        <div className="project-detail__gallery">
          {project.gallery.map((image, index) => {
            const src = imageUrl(image);
            return src ? (
              <img key={src} src={src} alt="" loading="lazy" data-index={index} />
            ) : null;
          })}
        </div>
      )}
    </article>
  );
}
