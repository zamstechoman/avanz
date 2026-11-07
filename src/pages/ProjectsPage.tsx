import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ContactCallout from "../components/ContactCallout";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeading from "../components/SectionHeading";
import { projectsFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { projectsQuery } from "../lib/sanity";
import type { Project } from "../types/content";

const originalFilters = [
  "All",
  "Fintech",
  "SaaS",
  "Motion Design",
  "Branding",
  "Web Design",
  "Product Design",
  "UI Design",
  "UX Design",
];

const slideshowImages = [
  "/assets/images/slideshow-card-tgbe4fgtw.png",
  "/assets/images/slideshow-card-y0xhcwgjn.png",
  "/assets/images/slideshow-card-c7hibp7fy.png",
];

export default function ProjectsPage() {
  const projects = useSanityContent<Project[]>(projectsQuery, projectsFallback);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const filteredProjects = useMemo(
    () => {
      const search = searchText.trim().toLowerCase();
      return projects.filter((project) => {
        const matchesFilter =
          activeFilter === "All" ||
          project.categories?.includes(activeFilter);
        const matchesSearch =
          !search ||
          project.title.toLowerCase().includes(search) ||
          project.categories?.some((category) =>
            category.toLowerCase().includes(search),
          );
        return matchesFilter && matchesSearch;
      });
    },
    [activeFilter, projects, searchText],
  );

  return (
    <>
      <section className="page-hero page-hero--projects">
        <p className="eyebrow">Selected projects</p>
        <h1>Bold ideas, Stunning results.</h1>
        <p className="page-hero__subtitle">
          Have a project in mind or need guidance? Let's bring your vision to
          life.
        </p>
      </section>

      <section className="section projects-list">
        <label className="project-search">
          <span className="sr-only">Search projects</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search Project…"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </label>
        <div className="project-filters" aria-label="Filter projects">
          {originalFilters.map((filter) => (
            <button
              className={activeFilter === filter ? "is-active" : ""}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        {filteredProjects[0] && (
          <FeaturedProject project={filteredProjects[0]} />
        )}
        {filteredProjects.length > 1 && (
          <ProjectGrid projects={filteredProjects.slice(1)} />
        )}
        {filteredProjects.length === 0 && (
          <p className="empty-state">No matching projects.</p>
        )}
      </section>

      <section className="section section--testimonials">
        <SectionHeading
          eyebrow="We're loved."
          title="Just success stories."
          align="center"
        />
        <div className="testimonial-grid">
          {[
            ["3.1×", "increase in qualified leads"],
            ["41%", "reduction in drop-off rate"],
            ["2.3×", "increase in lead conversion"],
            ["45%", "Reduced bounce rate"],
          ].map(([value, label]) => (
            <figure className="result-card" key={value}>
              <span className="result-card__metric">
                {value}
              </span>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContactCallout />
    </>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slideshowImages.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="project-showcase">
      <div className="project-showcase__image">
        {slideshowImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={activeSlide === index ? "is-active" : ""}
          />
        ))}
      </div>
      <div className="project-showcase__caption">
        <div>
          <h2>{project.title}</h2>
          {project.description && <p>{project.description}</p>}
        </div>
        <Link to={`/projects/${project.slug}`}>
          View Project <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="project-showcase__slides" aria-label="Project slideshow">
        {slideshowImages.map((src, index) => (
          <button
            type="button"
            key={src}
            aria-label={`Show project slide ${index + 1}`}
            aria-current={activeSlide === index}
            onClick={() => setActiveSlide(index)}
          >
            <img src={src} alt="" className={activeSlide === index ? "is-active" : ""} />
          </button>
        ))}
      </div>
    </article>
  );
}
