"use client";

import { useEffect } from "react";

export function ScrollState() {
  useEffect(() => {
    const setScrolled = () => {
      document.body.dataset.scrolled = window.scrollY > 12 ? "true" : "false";
    };

    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    return () => window.removeEventListener("scroll", setScrolled);
  }, []);

  return null;
}
