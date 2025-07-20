
import { Billboard } from "@/types";
import { getApiUrlFromCookie } from "./get-apiUrl-from-cookie";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboards = async (): Promise<Billboard[]> => {
    // const apiUrl = useApi()

    const apiUrl = await getApiUrlFromCookie()

    const URL = `${apiUrl}/billboards`

    const res = await fetch(URL)

    const json = res.json()

  return json
}

export default getBillboards