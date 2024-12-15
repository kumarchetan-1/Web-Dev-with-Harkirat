import { NextResponse } from "next/server";


export function GET() {
    
    return NextResponse.json({
        name: "Chetan",
        email: "kumarchetan.npr@gmail.com"
    })
}