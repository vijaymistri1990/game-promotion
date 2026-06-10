"use client";

import { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";

export default function AgeNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem("ageNoticeAcknowledged");
    if (!hasSeenNotice) {
      setIsVisible(true);
    }
  }, []);

  const dismissNotice = () => {
    localStorage.setItem("ageNoticeAcknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-t-2 border-[#DF264D] p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white">
          <div className="bg-[#DF264D] p-2 rounded-full hidden sm:block">
            <span className="font-bold text-xl leading-none">18+</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-5 h-5 text-yellow-400 sm:hidden" />
              <h3 className="font-bold text-lg">Age Restricted Content (18+)</h3>
            </div>
            <p className="text-sm text-red-100/90 leading-snug">
              This website and its games are strictly for users who are 18 years of age or older. 
              By continuing to use this site, you confirm that you meet the minimum age requirement.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-end gap-3">
          <button 
            onClick={dismissNotice}
            className="w-full sm:w-auto px-6 py-2 bg-white text-red-900 font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            I am 18 or older
          </button>
        </div>
      </div>
    </div>
  );
}
