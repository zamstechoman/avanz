import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import StudioPage from "./pages/StudioPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function MissingPage() {
  return (
    <main className="empty-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <a className="text-link" href="/">
        Back to home <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}

function SiteLayout() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      <ScrollToTop />
      {isStudio ? (
        <Routes>
          <Route path="/studio/*" element={<StudioPage />} />
        </Routes>
      ) : (
        <SiteLayout />
      )}
    </>
  );
}
