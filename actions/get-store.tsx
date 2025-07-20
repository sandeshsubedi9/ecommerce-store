
import { Store } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getStore = async (): Promise<Store | null> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()

    if(!apiUrl) return null

    const URL = `${apiUrl}`

    const res = await fetch(URL)

    if(!res.ok) return null

    const json = res.json()

  return json
}

export default getStore