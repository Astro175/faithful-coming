"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function DeploymentStatusPage() {
  useEffect(() => {
    fetch("/api/deployment-status")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dummy fetch:", data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6 text-white">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={120}
        height={24}
        className="mb-4"
        priority
      />
      <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
        Setting up Chat Server Infrastructure
      </h1>
      <p className="max-w-md mb-4 text-white">
        Vercel is currently provisioning the backend infrastructure for chat
        functionality.
        <br />
        Hosting setup is underway and full website integration is coming soon.
      </p>
      <div className="text-green-400 mt-4 space-y-1 text-sm">
        <p>✅ Database & Authentication configured</p>
        <p>✅ WebSocket server initialized</p>
        <p>⏳ Linking to frontend components...</p>
      </div>
      <p className="text-sm text-gray-400 mt-6">
        Powered by Vercel • {new Date().getFullYear()}
      </p>
    </main>
  );
}
