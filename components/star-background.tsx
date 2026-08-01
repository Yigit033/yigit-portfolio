"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Dynamically import with no SSR
const StarBackgroundCanvas = dynamic(() => import("./star-background-canvas"), { ssr: false });

export function StarsCanvas() {
  // resolvedTheme, not theme: the default is "system", in which case `theme`
  // is the literal string "system" and never equals "dark" — which rendered
  // the light-mode (violet) stars on a dark background.
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <StarBackgroundCanvas isDark={resolvedTheme === "dark"} />;
}
