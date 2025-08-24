"use client";

import React from "react";
import { Header } from "../header/Header";
import { Hero } from "../sections/hero/Hero";
import { Skills } from "../sections/skills/Skills";
import { Projects } from "../sections/projects/Projects";
import { Contact } from "../sections/contact/Contact";

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Homepage;
