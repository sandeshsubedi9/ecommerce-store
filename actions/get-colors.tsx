
import { Color } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()

    if (!apiUrl) {
        return []
    }

    const URL = `${apiUrl}/colors`

    const res = await fetch(URL)

    return res.json()
}

export default getColors