// app/page.tsx or app/holding/page.
import Image from "next/image";
export default function DeploymentStatusPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <Image
        src="https://assets.vercel.com/image/upload/v1668888888/front/vercel/logo/vercel-logo-dark.svg"
        alt="Vercel Logo"
        className="h-6 mb-4"
        height={24}
        width={24}
      />
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
        Faithful Match has been deployed successfully
      </h1>
      <p className="text-gray-600 max-w-md mb-4">
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
