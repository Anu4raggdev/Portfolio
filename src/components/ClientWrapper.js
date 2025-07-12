"use client";

import { useEffect } from "react";
import { init } from "@emailjs/browser";
import dynamic from "next/dynamic";
import AOS from 'aos';

const SocialSidebar = dynamic(() => import('@/components/SocialSidebar'), { ssr: false });

export default function ClientWrapper({ children }) {
  useEffect(() => {
    // Initialize EmailJS when component mounts
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized");
    }

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 0
    });
  }, []);

  return (
    <div className="relative">
      <SocialSidebar />
      {children}
    </div>
  );
} 