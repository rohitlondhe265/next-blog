import { NextResponse } from "next/server";
import excuteQuery from "@/lib/db";

export async function POST(request) {

    const body = await request.json();
    const { id, title, content, status, thumbnail, metaTitle, slug, categories, tags, metadata } = body;

    try {
        const post_result = await excuteQuery({
            query: `INSERT INTO post (title, content, status, thumbnail, metaTitle, slug) VALUES (?, ?, ?, ?, ?, ?)`,
            values: [title, content, status, thumbnail, metaTitle, slug]
        });

        const tagsArr = [tags.map(tag => [id, tag])];
        const catsArr = [categories.map(cat => [id, cat])];
        const metaArr = [metadata.map(data => [id, data.name, data.content])];

        const meta_result = await excuteQuery({
            query: `INSERT INTO post_meta (postId, name, content) VALUES ?`,
            values: metaArr
        });
        const tag_result = await excuteQuery({
            query: `INSERT INTO post_tag (postId, tagId) VALUES ?`,
            values: tagsArr
        });
        const cat_result = await excuteQuery({
            query: `INSERT INTO post_category (postId, categoryId) VALUES ?`,
            values: catsArr
        });

        return NextResponse.json({ post: post_result, cat: cat_result, tag: tag_result, meta_result });

    } catch (error) {
        return NextResponse.json(error);
    }
}