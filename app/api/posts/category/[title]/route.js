import excuteQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page")) - 1 || 0;
    const limit = parseInt(searchParams.get("limit")) || 9;
    const title = params.title;

    const result = await excuteQuery({
        query: "SELECT COUNT(p.id) as `total` FROM category c INNER JOIN post_category pc ON c.id = pc.categoryId INNER JOIN post p ON pc.postId = p.id WHERE c.title = ?",
        values: [title]
    });
    const total = await result[0].total;
    const skip = page * limit;

    try {
        const result = await excuteQuery({
            query: "SELECT p.id, p.title FROM category c INNER JOIN post_category pc ON c.id = pc.categoryId INNER JOIN post p ON pc.postId = p.id WHERE c.title = ? ORDER BY p.createdAt DESC LIMIT ? OFFSET ?",
            values: [title, limit, skip]
        });
        return NextResponse.json({ category: title, data: result, page: page + 1, limit, total })
    } catch (error) {
        return NextResponse.json(error);
    }
}