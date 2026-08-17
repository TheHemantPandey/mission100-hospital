"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SCROLL_KEY = "scrollPos";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable the browser's automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Save scroll position before the page unloads (refresh / close)
    const saveScroll = () => {
      const pos = window.scrollY;
      if (pos > 0) {
        sessionStorage.setItem(
          SCROLL_KEY,
          JSON.stringify({ y: pos, path: pathname })
        );
      } else {
        sessionStorage.removeItem(SCROLL_KEY);
      }
    };

    window.addEventListener("beforeunload", saveScroll);

    // Restore scroll position after dynamic components have had time to render.
    const restoreScroll = () => {
      try {
        const raw = sessionStorage.getItem(SCROLL_KEY);
        if (!raw) return;

        const { y, path } = JSON.parse(raw);

        // Only restore if we are on the same route
        if (path !== pathname) {
          sessionStorage.removeItem(SCROLL_KEY);
          return;
        }

        // Retry until page is tall enough to hold the saved position
        const attempt = (retries = 0) => {
          const currentHeight = document.documentElement.scrollHeight;
          if (currentHeight >= y + window.innerHeight || retries >= 20) {
            window.scrollTo({ top: y, behavior: "instant" });
            sessionStorage.removeItem(SCROLL_KEY);
          } else {
            setTimeout(() => attempt(retries + 1), 100);
          }
        };

        // Small initial delay so the first paint of dynamic components occurs
        setTimeout(() => requestAnimationFrame(() => attempt()), 100);
      } catch {
        // Silently ignore any parse errors
      }
    };

    restoreScroll();

    return () => {
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, [pathname]);

  return null;
}
