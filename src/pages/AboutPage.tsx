import ContactCallout from "../components/ContactCallout";
import SectionHeading from "../components/SectionHeading";
import { aboutFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { aboutPageQuery } from "../lib/sanity";
import { imageUrl, type AboutPageContent } from "../types/content";

const storyImages = [
  "/assets/images/image-banner-team-oae6nr5ry.jpg",
  "/assets/images/image-banner-team-g3yjx6hkp.jpg",
  "/assets/images/image-banner-team-sksnevxgx.jpg",
];

export default function AboutPage() {
  const fetched = useSanityContent<AboutPageContent>(
    aboutPageQuery,
    aboutFallback,
  );
  const content = {
    ...aboutFallback,
    ...fetched,
    teamMembers: fetched.teamMembers ?? aboutFallback.teamMembers,
    awards: fetched.awards ?? aboutFallback.awards,
  };

  return (
    <>
      <section className="page-hero page-hero--about">
        <p className="eyebrow">AVANZORA SOLUTION</p>
        <h1>{content.heroTitle}</h1>
        <p className="page-hero__subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section story-section">
        <div className="story-copy">
          <SectionHeading
            eyebrow="Our story"
            title={content.storyTitle}
            description="We are a dedicated team for a reason; this is our manifesto and what we believe in."
          />
          <p>{content.storyBody}</p>
        </div>
        <div className="story-image-grid">
          {storyImages.map((src, index) => (
            <img key={src} src={src} alt="" loading="lazy" data-position={index} />
          ))}
        </div>
      </section>

      <section className="founders-strip" aria-label="Trusted by top founders">
        <span className="eyebrow">TRUSTED BY TOP FOUNDERS</span>
        <div className="founders-strip__names" aria-label="Acme Corp, Quantum, APEX, Celestial and 50+ more">
          <span>Acme Corp</span>
          <span>Quantum</span>
          <span>APEX</span>
          <span>Celestial</span>
          <span>and 50+ more</span>
        </div>
      </section>

      <section className="section section--team">
        <SectionHeading
          eyebrow="Meet our"
          title="amazing team."
          description="Great things in business are never done by one person. They are done by a team of people - Steve jobs."
          align="center"
        />
        <div className="team-grid">
          {content.teamMembers.map((member) => {
            const portrait = imageUrl(member.imageUrl);
            return (
              <article className="team-card" key={member.name}>
                {portrait && <img src={portrait} alt={member.name} loading="lazy" />}
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--awards">
        <div className="section-intro-row">
          <SectionHeading eyebrow="Awards," title="We won." />
          <a className="text-link" href="mailto:hello@lamosa.studio">
            We're hiring <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="awards-list">
          {content.awards.map((award) => (
            <article className="award-row" key={award.name}>
              <h3>{award.name}</h3>
              <p>{award.description}</p>
              <time>{award.year}</time>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--fit">
        <SectionHeading
          eyebrow="Why work with us?"
          title="We're the best fit"
          description="Find out why Lamosa Is Your Smartest Choice for Project Success."
          align="center"
        />
        <div className="comparison-grid">
          <div className="comparison-card comparison-card--highlight">
            <h3>Your option</h3>
            <ul>
              <li>Affordable one-time pricing.</li>
              <li>Launch-ready, deploys in days.</li>
              <li>Flexible, easy to tailor with Framer.</li>
              <li>Professionally crafted, conversion-focused.</li>
              <li>Regular improvements &amp; Updates.</li>
              <li>Proven template tested for results.</li>
            </ul>
          </div>
          <div className="comparison-card">
            <h3>Team / Freelancer</h3>
            <ul>
              <li>Salary of $4000 - $10,000</li>
              <li>Takes 4 - 8 weeks to go live</li>
              <li>Hire a full time team</li>
              <li>Probably. not assured</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactCallout />
    </>
  );
}
