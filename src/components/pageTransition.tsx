"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`overlay-${pathname}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 , ease: "easeInOut" }}
        className="fixed inset-0 bg-primary z-[9999] pointer-events-none"
      />

      {showContent && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0, ease: "easeInOut" } }}
          exit={{ opacity: 0, transition: { duration: 0, ease: "easeInOut" } }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
