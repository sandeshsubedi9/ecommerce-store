import getStore from "@/actions/get-store"

export const StoreName = async () => {
    const store = await getStore()

    return (
        <div className="text-2xl font-bold">
            <h1>{store.name}</h1>
        </div>
    )
}