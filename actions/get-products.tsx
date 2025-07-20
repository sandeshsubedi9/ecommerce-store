

import { Product } from "@/types";
import qs from "query-string"
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {

    // const apiUrl  = useApi()
    const apiUrl = await getApiUrlFromCookie()
    
    if (!apiUrl) {
        return []
    }

    const URL = `${apiUrl}/products`

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })

    const res = await fetch(url)

    if (!res.ok) {
        return []
    }

    return res.json()
}

export default getProducts