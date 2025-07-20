
import { Category } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()

    if (!apiUrl) {
        return []
    }

    const URL = `${apiUrl}/categories`

    if (!apiUrl) {
        return []
    }

    const res = await fetch(URL)

    return res.json()
}

export default getCategories