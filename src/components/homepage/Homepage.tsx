"use client";

import React from "react";
import { Header } from "../header/Header";
import { Hero } from "../sections/hero/Hero";
import { Skills } from "../sections/skills/Skills";

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
};

export default Homepage;
