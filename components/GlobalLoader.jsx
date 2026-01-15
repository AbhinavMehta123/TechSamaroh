"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export default function GlobalLoader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  // ✅ Prevent SSR hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    // Initial load timeout
    const timeout = setTimeout(() => setIsLoading(false), 1500);

    // Handle network status
    const handleOffline = () => {
      console.warn("🔴 Offline mode detected");
      setIsOffline(true);
      setIsLoading(true);
    };
    const handleOnline = () => {
      console.log("🟢 Back online");
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

  useEffect(() => {
    const originalPush = router.push;

    router.push = (href, options) => {
      setIsLoading(true);
      startTransition(() => {
        originalPush(href, options);
        setTimeout(() => setIsLoading(false), 1200);
      });
    };

    return () => {
      router.push = originalPush;
    };
  }, [router, startTransition]);

  // 🧱 Wait until client mounted
  if (!hasMounted) return null;

  // 🟠 Only show loader when needed
  if (!isLoading && !isPending && !isOffline) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-center transition-opacity duration-500">
      <Loader />

      {isOffline && (
        <div className="absolute bottom-16 px-6 py-3 rounded-full bg-[#1a1a1a]/70 border border-[#e99b63]/30 backdrop-blur-md">
          <p className="text-[#e99b63] font-semibold tracking-wide text-sm">
            ⚠️ You are offline. Please check your internet connection.
          </p>
        </div>
      )}
    </div>
  );
}
