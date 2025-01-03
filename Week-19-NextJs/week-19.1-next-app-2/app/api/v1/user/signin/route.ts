import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    
    const response = await req.json()
    console.log(response);
    

    return NextResponse.json({
        message: "You signed in successfully"
    })
}