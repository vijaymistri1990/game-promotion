"use client";

import { useEffect, useState } from "react";

export default function GooglebotDetector() {
  const [isGooglebot, setIsGooglebot] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("googlebot")) {
      setIsGooglebot(true);
    }
  }, []);

  if (!isGooglebot) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-2 z-50 font-bold shadow-md">
      [Googlebot Detected] Confirming: This page is officially for the IV7 game site.
    </div>
  );
}
