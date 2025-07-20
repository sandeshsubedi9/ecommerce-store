import { getApiUrlFromCookie } from "@/actions/get-apiUrl-from-cookie"
import { NextResponse } from "next/server"

export async function GET() {
    const apiUrl = await getApiUrlFromCookie()

    if (!apiUrl) return new Response("No API URL Found", { status: 401 })

    return NextResponse.json({apiUrl})
}