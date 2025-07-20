// app/set-api-url.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const SetApiCookie = () => {
  const searchParams = useSearchParams();
  const apiUrl = searchParams.get("api");

  useEffect(() => {
    if (apiUrl) {
    document.cookie = `apiUrl=${apiUrl}; path=/; max-age=2147483647`;
    }
  }, [apiUrl]);

  return null;
};
