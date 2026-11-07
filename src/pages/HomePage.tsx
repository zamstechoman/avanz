import ContactCallout from "../components/ContactCallout";
import SectionHeading from "../components/SectionHeading";
import { homeFallback } from "../data/fallback";
import { useSanityContent } from "../hooks/useSanityContent";
import { homePageQuery } from "../lib/sanity";
import { imageUrl, type HomePageContent } from "../types/content";

export default function HomePage() {
  const fetched = useSanityContent<HomePageContent>(homePageQuery, homeFallback);
  const content = {
    ...homeFallback,
    ...fetched,
    metrics: fetched.metrics ?? homeFallback.metrics,
    services: fetched.services ?? homeFallback.services,
    processSteps: fetched.processSteps ?? homeFallback.processSteps,
    pricingPlans: fetched.pricingPlans ?? homeFallback.pricingPlans,
    testimonials: fetched.testimonials ?? homeFallback.testimonials,
    faqs: fetched.faqs ?? homeFallback.faqs,
  };

  return (
    <>
      <section className="home-hero" id="section-hero">
        <div className="hero-copy">
          <h1>{content.heroTitle}</h1>
          <p>{content.heroDescription}</p>
        </div>
        <div className="hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Avanzora digital projects and product designs"
          >
            <source src="/media/home-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-footer">
          <span>Trusted by 1,200+ founders.</span>
          <span>Turning ideas into bold brands.</span>
          <a href="mailto:hello@lamosa.studio" aria-label="Start a project">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section section--metrics">
        <SectionHeading
          eyebrow="Proven & effective process."
          title="That delivers results."
        />
        <div className="metrics-grid">
          {content.metrics.map((metric) => (
            <article className="metric-card" key={metric.title}>
              <div className="metric-card__value">{metric.value}</div>
              <h3>{metric.title}</h3>
              {metric.description && <p>{metric.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--services" id="section-services">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="What we do"
            title="From idea to scale."
            description="We master our craft."
          />
          <a className="text-link" href="mailto:hello@lamosa.studio">
            Start A Project <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="service-grid">
          {content.services.map((service, index) => {
            const cover = imageUrl(service.imageUrl);
            return (
              <article
                className={`service-card service-card--${index + 1}`}
                key={service.title}
              >
                {cover && <img src={cover} alt="" loading="lazy" />}
                <div className="service-card__content">
                  <span className="service-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--process" id="section-process">
        <SectionHeading
          eyebrow="A proven process"
          title="Proven & effective process. That delivers results."
          description="We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact."
          align="center"
        />
        <div className="process-grid">
          {content.processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="process-step__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="process-result" aria-label="Process results">
        <strong>+429%</strong>
        <span>Monthly revenue</span>
      </section>

      <section className="section section--pricing" id="section-pricing">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="Let's start building"
            title="Choose a plan. That fits your needs."
            description="Flexible plans designed to accelerate growth, with solutions that evolve with your business."
          />
          <p className="pricing-intro__aside">
            We're the A-team you can trust and need to launch your product
          </p>
        </div>
        <div className="pricing-grid">
          {content.pricingPlans.map((plan, index) => (
            <article
              className={`pricing-card${index === 0 ? " pricing-card--featured" : ""}`}
              key={plan.name}
            >
              <div className="pricing-card__heading">
                <div>
                  <h3>{plan.name}</h3>
                  {plan.label && <span className="pricing-card__label">{plan.label}</span>}
                </div>
                {plan.price && <strong>{plan.price}</strong>}
              </div>
              <p className="pricing-card__description">{plan.description}</p>
              {plan.priceUnit && <p className="pricing-card__unit">{plan.priceUnit}</p>}
              <a className="button button--dark" href="mailto:hello@lamosa.studio">
                Get Started Now <span aria-hidden="true">↗</span>
              </a>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--testimonials" id="section-testimonials">
        <SectionHeading
          eyebrow="We're loved."
          title="Just success stories."
          align="center"
        />
        <div className="testimonial-grid">
          {content.testimonials.map((testimonial) => {
            const portrait = imageUrl(testimonial.imageUrl);
            return (
              <figure className="testimonial-card" key={testimonial.name}>
                {testimonial.metric && (
                  <div className="testimonial-card__result">
                    <strong>{testimonial.metric}</strong>
                    <span>{testimonial.metricDescription}</span>
                  </div>
                )}
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  {portrait && (
                    <img src={portrait} alt="" loading="lazy" />
                  )}
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.role}</small>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="section section--faq" id="section-faq">
        <div className="faq-intro">
          <SectionHeading
            eyebrow="Got a question?"
            title="We've got answers."
          />
          <a className="text-link" href="mailto:hello@lamosa.studio">
            Still have question? <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="faq-list">
          {content.faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              {item.answer && <p>{item.answer}</p>}
            </details>
          ))}
        </div>
      </section>

      <ContactCallout />
    </>
  );
}
