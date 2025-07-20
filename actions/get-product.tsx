

import { Product } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id:string): Promise<Product> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()
    
    const URL = `${apiUrl}/products/${id}`

    const res = await fetch(URL)

    return res.json()
}

export default getProduct