import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const res = await req.json()

    const { content, title } = res
    console.log({ res });

    const result = await prisma.post.create({
        data: {
            title,
            content,
            author: {
                create: {
                    name: "ryan"
                }
            },
            published: true
        }
    })

    return NextResponse.json({ result })
}