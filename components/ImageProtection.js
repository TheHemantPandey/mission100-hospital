"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    // Only run on production builds
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const preventContextMenu = (e) => {
      e.preventDefault();
    };

    const preventImageDrag = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    const blockKeys = (e) => {
      if (e.key === "F12") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventImageDrag);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventImageDrag);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}