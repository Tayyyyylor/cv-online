// global types
type Locale = "en" | "fr";

interface Project {
  category: "client" | "freelance" | "experimental";
  title: string;
  description: string;
  logo: string;
  badges: string[];
  linkWebsite: string;
  linkGithub: string;
}
