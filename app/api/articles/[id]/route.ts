import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    const article = await prisma.articles.findUnique({
      where: { id },
    });

    if (!article) {
      return new Response("Article not found", { status: 404 });
    }

    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  const data = await req.json();

  try {
    const article = await prisma.articles.update({
      where: { id },
      data,
    });

    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    const article = await prisma.articles.delete({
      where: { id },
    });

    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
