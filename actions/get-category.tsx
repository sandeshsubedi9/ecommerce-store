
import { Category } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id:string): Promise<Category> => {
    // const apiUrl = useApi()
    
    const apiUrl = await getApiUrlFromCookie()

    const URL = `${apiUrl}/categories/${id}`

    const res = await fetch(URL)

    return res.json()
}

export default getCategory