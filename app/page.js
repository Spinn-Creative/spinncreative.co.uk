import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 z-[-1] lg:hidden">
        <video
          className="object-cover w-full h-full"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold mb-4">
          A Creative Technology Agency
        </h1>
        <p className="text-white text-lg">
          We are a team of specialists that can help you to bring your creative vision to life.
        </p>
      </div>
    </main>
  );
}
