export default function ContactCallout() {
  return (
    <section className="contact-callout">
      <div>
        <p className="eyebrow">Let's start building</p>
        <h2>You focus on your company. We make it happen</h2>
        <p className="contact-callout__description">
          Cloud computing infrastructure paired with robust local network
          security to ensure end-to-end data safety.
        </p>
      </div>
      <a className="button button--light" href="mailto:hello@lamosa.studio">
        Book a Call <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
