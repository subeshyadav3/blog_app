import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
    try {
        const { clerkId, email, name, imageUrl, role } = await request.json();
        console.log("Received data:", { clerkId, email, name, imageUrl, role });
        if (!clerkId || !email) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { clerkId },
        });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists." }, { status: 200 });
        }

        const newUser = await prisma.user.create({
            data: {
                clerkId,
                email,
                name,
                imageUrl,
                role,
            },
        });

        return NextResponse.json({ message: "User synced.", user: newUser }, { status: 201 });

    } catch (error) {
        console.error("Error syncing user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
