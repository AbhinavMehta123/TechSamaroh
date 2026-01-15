"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export default function GlobalLoader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // ✅ Loader visible on initial load
    const timeout = setTimeout(() => setIsLoading(false), 1500);

    // ✅ Handle online/offline
    const handleOffline = () => {
      setIsOffline(true);
      setIsLoading(true);
    };
    const handleOnline = () => {
      setIsOffline(false);
      setIsLoading(false);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // ✅ Listen to navigation with `useTransition`
  useEffect(() => {
    const originalPush = router.push;

    router.push = (href, options) => {
      setIsLoading(true);
      startTransition(() => {
        originalPush(href, options);
        setTimeout(() => setIsLoading(false), 1200); // adjust duration
      });
    };

    return () => {
      router.push = originalPush; // cleanup
    };
  }, [router, startTransition]);

  // ✅ Render loader
  if (!isLoading && !isPending && !isOffline) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center text-center transition-opacity duration-500">
      <Loader />
      {isOffline && (
        <p className="absolute bottom-16 text-[#e99b63] font-semibold tracking-wide text-sm">
          ⚠️ You are offline. Please check your internet connection.
        </p>
      )}
    </div>
  );
}
