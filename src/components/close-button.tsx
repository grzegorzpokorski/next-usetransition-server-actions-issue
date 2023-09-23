"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const CloseButton = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <button className="bg-black text-white p-1" onClick={handleClick}>
      close
    </button>
  );
};
