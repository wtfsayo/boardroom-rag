import { defineConfig } from "vocs";

export default defineConfig({
  title: "Docs",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Architecture",
      link: "/architecture",
    },
    {
      text: "Tech Stack",
      link: "/tech-stack",
    },
    {
      text: "Using with CLI",
      link: "/cli",
    },
    {
      text: "Deployment",
      link: "/deployment",
    },
  ],
});
