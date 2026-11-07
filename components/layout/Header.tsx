import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const templateUrl =
  "https://buy.polar.sh/polar_cl_Vh9Iuo4sax2ytsA3hQ7kRDF0JaFPdw9qEYRVb2aO0xL";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/"
          className="brand"
          aria-label="Avanzora Solution home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand__mark" aria-hidden="true">
            //
          </span>
          <span>AVANZORA SOLUTION</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <details className="nav-dropdown">
            <summary>
              Company <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="nav-dropdown__menu">
              <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                About us
              </NavLink>
              <a href="mailto:hello@lamosa.studio">Contact us</a>
            </div>
          </details>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "is-active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Projects <span className="new-badge">New</span>
          </NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
            About us
          </NavLink>
          <a className="button button--primary nav-template" href={templateUrl}>
            Get Template <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}