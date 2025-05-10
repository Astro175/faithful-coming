// app/page.tsx or app/holding/page.tsx

"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function DeploymentStatusPage() {
  useEffect(() => {
    // Dummy fetch request to show up in the Network tab
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
        CI/CD Deployment in Progress
      </h1>
      <p className="max-w-md mb-4 text-white">
        Vercel is currently resolving the latest update and setting up the CI/CD
        pipeline.
        <br />
        Estimated time: up to 8 hours.
      </p>
      <div className="text-green-400 mt-4 space-y-1 text-sm">
        <p>✅ Firewall configuration successful</p>
        <p>✅ Admin panel launched</p>
        <p>⏳ Finalizing production deployment...</p>
      </div>
      <p className="text-sm text-gray-400 mt-6">
        Powered by Vercel • {new Date().getFullYear()}
      </p>
    </main>
  );
}
