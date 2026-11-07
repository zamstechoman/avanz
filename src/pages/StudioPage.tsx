import { Studio } from "sanity";
import sanityConfig from "../../sanity.config";
import { sanityConfigured } from "../lib/sanity";

export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <main className="studio-setup">
        <p className="eyebrow">Sanity Studio</p>
        <h1>Connect your Sanity project</h1>
        <p>
          Copy <code>.env.example</code> to <code>.env.local</code>, set
          <code> VITE_SANITY_PROJECT_ID</code>, then restart the development
          server.
        </p>
      </main>
    );
  }

  return (
    <div className="studio-shell">
      <Studio config={sanityConfig} />
    </div>
  );
}
