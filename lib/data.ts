import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { LiaSchoolSolid } from "react-icons/lia";
import spotifyClone from "@/public/spotifyClone.png";
import scribbleShack from "@/public/scribbleShack.png"
import animeHub from "@/public/animeHub.png"
import netflixClone from "@/public/netflixClone.png"
import servd from "@/public/servd.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Secondary (XII)",
    location: "Delhi, India",
    description:
      "Completed my senior secondary schooling specialized in Computer Science from Bal Bhavan Public School.",
    icon: React.createElement(LiaSchoolSolid),
    date: "2017",
    tags: ["CGPA : 8.5/10"]
  },{
    title: "Bachelors of Technology (CSE)",
    location: "Delhi, India",
    description:
      "Did a 4-year undergraduate degree program in technology offered by Guru Tegh Bahadur Institute of Technology. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
    tags: ["CGPA : 7.8/10"]
  },
  {
    title: "Front-End Developer",
    location: "Delhi, India",
    description:
      "I spent over 3 years working on a large-scale internal research platform for Johnson & Johnson (JNJ). I led a team of 6 engineers, built reusable UI components, and optimized REST APIs and page load speeds to help the application scale efficiently.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
    tags: ["Angular JS", "Springboot", "Oracle SQL Developer", "Git"]
  },
  {
    title: "Front-End Developer",
    location: "Delhi, India",
    description:
      "I currently work as a frontend engineer for National Australia Bank, building a white-label platform and integrating multiple mini-app modules. I focus on optimizing performance using dynamic imports, setting up automated security checks, and monitoring production health.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
    tags: ["React JS", "Node JS", "TypeScript", "Microfrontends", "Git", "SPLUNK", "CI/CD"]
  },
] as const;

export const projectsData = [
  {
    title: "Servd",
    description:
      "An AI-powered recipe platform featuring intelligent meal generation, smart pantry tracking.",
    tags: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL", "Gemini"],
    imageUrl: servd,
    liveDemoUrl: "https://servd-omega.vercel.app/",
    githubRepositoryUrl: "https://github.com/rohitgpt720/servd",
  },
  {
    title: "Spotify Clone",
    description:
      "A full stack spotify clone where you can upload, like, play songs after purchasing a subscription.",
    tags: ["Next.js", "Tailwind CSS","Supabase", "Stripe", "Typescript"],
    imageUrl: spotifyClone,
    liveDemoUrl: "https://spotify-clone-chi-orcin.vercel.app",
    githubRepositoryUrl: "https://github.com/rohitgpt720/spotify-clone",
  },
  {
    title: "ScribbleShack",
    description:
      "A SAAS note taking application with multiple theme support.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Kinde", "Supabase",  "Stripe", "Typescript"],
    imageUrl: scribbleShack,
    liveDemoUrl: "https://scribble-shack.vercel.app",
    githubRepositoryUrl: "https://github.com/rohitgpt720/scribble-shack",
  },
  {
    title: "Netflix Clone",
    description:
      "A netflix UI clone with Next Auth.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Next-Auth", "Supabase", "Typescript"],
    imageUrl: netflixClone,
    liveDemoUrl: "https://netflix-clone-red-zeta.vercel.app",
    githubRepositoryUrl: "https://github.com/rohitgpt720/netflix-clone",
  },
  {
    title: "AnimeHub",
    description:
      "A fun personal project which uses an API to fetch anime details.",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "Framer Motion"],
    imageUrl: animeHub,
    liveDemoUrl: "https://anime-hub-theta.vercel.app/",
    githubRepositoryUrl: "https://github.com/rohitgpt720/anime-hub",
  },
  
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JavaScript",
  "TypeScript",
  "Java",
  "React.js",
  "Next.js",
  "AngularJS",
  "Express.js",
  "Strapi",
  "Spring Boot",
  "Tailwind CSS",
  "Git",
  "Stripe",
  "Clerk Auth",
  "Gemini API",
  "PostgreSQL",
  "Neon DB",
  "MongoDB",
  "MySQL",
  "Supabase",
  "Oracle SQL Developer",
  "Splunk",
  "Vercel",
  "Docker",
  "AWS",
  "Linux",
  "Azure",
  "CI/CD",
  "Shadcn/UI",
  "Supabase",
  "Stripe",
  "Prisma",
  "Git",
  "Figma",
  "Framer Motion",
] as const;
