"use client";

import React from "react";
import { Header } from "../header/Header";
import { Hero } from "../sections/hero/Hero";

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Homepage;
