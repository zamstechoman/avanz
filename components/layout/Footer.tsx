import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              //
            </span>
            <span>AVANZORA SOLUTION</span>
          </Link>
          <p>
            Stay ahead with strategies uniting design, technology, and marketing
            to deliver measurable growth.
          </p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          <Link to="/projects">Projects</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Get in touch</span>
          <a href="mailto:hello@lamosa.studio">hello@lamosa.studio</a>
          <a href="tel:+123456778">+1 23456778</a>
          <Link to="/studio">Content studio</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Avanzora. All rights reserved.</p>
        <p>Built in Amity node by Seyed ussain iqbal</p>
      </div>
    </footer>
  );
}