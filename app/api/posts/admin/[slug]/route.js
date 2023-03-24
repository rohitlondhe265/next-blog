import excuteQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const slug = params.slug;

    try {
        const result = await excuteQuery({
            query: "",
            values: [slug]
        });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function DELETE(request, { params }) {
    const slug = params.slug;

    try {
        const result = await excuteQuery({
            query: "",
            values: [slug]
        });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(error);
    }
}