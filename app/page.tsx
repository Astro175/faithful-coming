// app/page.tsx or app/holding/page.tsx

import Image from "next/image";

export default function DeploymentStatusPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6 text-white">
      <Image
        src="/vercel.svg" // make sure this path matches your actual file
        alt="Vercel Logo"
        width={120}
        height={24}
        className="mb-4"
        priority
      />
      <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
        Faithful Match has been deployed successfully
      </h1>
      <p className=" max-w-md mb-4 text-white">
        This site includes high-performance animations and engaging user
        experiences.
        <br />
        Vercel is currently installing additional dependencies to ensure full
        compatibility and performance.
      </p>
      <p className="text-sm text-gray-400">
        Powered by Vercel • {new Date().getFullYear()}
      </p>
    </main>
  );
}
