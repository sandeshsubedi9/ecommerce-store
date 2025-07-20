import getStore from "@/actions/get-store"
import NoValidApi from "./ui/no-valid-api"

export const StoreName = async () => {
    const store = await getStore()

    if(!store) return <NoValidApi />

    return (
        <div className="text-2xl font-bold">
            <h1>{store.name}</h1>
        </div>
    )
}