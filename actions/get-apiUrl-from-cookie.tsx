import { cookies } from "next/headers";

export const getApiUrlFromCookie = async (): Promise<string> => {
  const cookieStore = await cookies(); // ✅ await here
  return cookieStore.get("apiUrl")?.value || process.env.NEXT_PUBLIC_API_URL!;
};
