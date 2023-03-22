import excuteQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page")) - 1 || 0;
    const limit = parseInt(searchParams.get("limit")) || 9;
    const title = params.title;

    const result = await excuteQuery({
        query: "SELECT COUNT(p.id) as 'total' FROM tag t INNER JOIN post_tag pt ON t.id = pt.tagId INNER JOIN post p ON pt.postId = p.id WHERE t.title = ?",
        values: [title]
    });
    const total = await result[0].total;
    const skip = page * limit;

    try {
        const result = await excuteQuery({
            query: "SELECT p.id, p.title FROM tag t INNER JOIN post_tag pt ON t.id = pt.tagId INNER JOIN post p ON pt.postId = p.id WHERE t.title = ? ORDER BY p.createdAt DESC LIMIT ? OFFSET ?",
            values: [title, limit, skip]
        });
        return NextResponse.json({tag: title, data: result, page: page + 1, limit, total })
    } catch (error) {
        return NextResponse.json(error);
    }
}