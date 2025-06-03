import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const article = await request.json();

  try {
    const articleUpdated = await prisma.articles.update({
      where: { id },
      data: {
        title: article.title,
        content: article.content,
        category: article.category,
        featuredImage: article.featuredImage,
        authorId: article.authorId,
      },
    });

    return NextResponse.json(articleUpdated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Cannot Edit - Internal Server Error ${error}` },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

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
