import excuteQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = req.nextUrl;
    const page = parseInt(searchParams.get("page")) - 1 || 0;
    const limit = parseInt(searchParams.get("limit")) || 9;

    const result = await excuteQuery({
        query: 'SELECT COUNT(`id`) as `total` FROM `post`',
        values: []
    });
    const total = await result[0].total;
    const skip = page * limit;
    
    try {
        const result = await excuteQuery({
            query: `SELECT p.*, GROUP_CONCAT(DISTINCT c.title ORDER BY c.title DESC SEPARATOR ', ') AS categories FROM post p INNER JOIN post_category pc on p.id = pc.postId INNER JOIN category c on pc.categoryId = c.id GROUP BY p.id, p.title, p.content ORDER BY p.createdAt DESC LIMIT ? OFFSET ?`,
            values: [limit, skip]
        });
        return NextResponse.json({ data: result, page: page + 1, limit, total })
    } catch (error) {
        return NextResponse.json(error);
    }
}
