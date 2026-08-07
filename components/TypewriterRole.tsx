"use client";

import { useEffect, useState } from "react";
import { heroRoles } from "@/lib/data";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1600;
const PAUSE_MS = 400;

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing");

  useEffect(() => {
    const current = heroRoles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_MS);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % heroRoles.length);
        setPhase("typing");
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  return (
    <p className="mt-3 flex items-center text-2xl font-semibold text-mint sm:text-3xl">
      <span>{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-mint align-middle" />
    </p>
  );
}
