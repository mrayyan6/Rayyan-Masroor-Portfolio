"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

export default function Providers({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {children}
    </MotionConfig>
  );
}
