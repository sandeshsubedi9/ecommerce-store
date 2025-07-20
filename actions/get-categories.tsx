
import { Category } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()

    const URL = `${apiUrl}/categories`

    if (!apiUrl) {
        return []
    }

    const res = await fetch(URL)

    if (!res.ok) {
        return []
    }

    return res.json()
}

export default getCategories