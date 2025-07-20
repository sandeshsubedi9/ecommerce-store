
import { Category } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// // const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

// const getCategory = async (id:string): Promise<Category> => {
//     // const apiUrl = useApi()
    
//     const apiUrl = await getApiUrlFromCookie()

//     const URL = `${apiUrl}/categories/${id}`

//     const res = await fetch(URL)

//     return res.json()
// }

// export default getCategory

const getCategory = async (id: string): Promise<Category | null> => {
  const apiUrl = await getApiUrlFromCookie();

  if (!apiUrl) return null;

  const URL = `${apiUrl}/categories/${id}`;

  try {
    const res = await fetch(URL);

    if (!res.ok) return null;

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return null;
  }
};

export default getCategory;
