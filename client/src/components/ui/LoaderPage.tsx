"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
