import { Size } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {

    // const apiUrl = useApi()
    const apiUrl = await getApiUrlFromCookie()

    if (!apiUrl) {
        return []
    }

    const URL = `${apiUrl}/sizes`



    const res = await fetch(URL)

    return res.json()
}

export default getSizes