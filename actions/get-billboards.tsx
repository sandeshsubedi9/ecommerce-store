
import { Billboard } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboards = async (): Promise<Billboard[]> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()

    if(!apiUrl) return []

    const URL = `${apiUrl}/billboards`

    const res = await fetch(URL)

    if(!res.ok) return []

    const json = res.json()

  return json
  
}

export default getBillboards