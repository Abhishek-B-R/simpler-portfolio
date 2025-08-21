"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-cyan-300 to-cyan-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md",
        className
      )}
    >
      {/* Main circular cyan gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[25rem] w-[25rem] rounded-full bg-gradient-to-tr from-cyan-500/40 to-cyan-300/10 blur-3xl" />
      </div>

      {/* Extra scatter glow circles */}
      <div className="absolute top-1/4 left-1/3 h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full bg-cyan-500/20 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-cyan-300/30 blur-lg"></div>

      <div className="relative z-50 flex flex-col items-center px-5">{children}</div>
    </div>
  );
};
