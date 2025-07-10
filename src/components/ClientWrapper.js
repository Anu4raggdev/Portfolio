"use client";

import { useEffect } from "react";
import { init } from "@emailjs/browser";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    // Initialize EmailJS when component mounts
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized");
    }
  }, []);

  return <>{children}</>;
} 