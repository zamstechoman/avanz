import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim();

export default defineConfig({
  name: "avanzora",
  title: "Avanzora",
  projectId: projectId || "missing-project-id",
  dataset: import.meta.env.VITE_SANITY_DATASET?.trim() || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
