import prisma from "@/app/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const articles = await prisma.articles.findMany();
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const user = await currentUser();
  const userExist = await prisma.user.findUnique({
    where: {
      email: user?.emailAddresses[0].emailAddress,
    },
  });

  try {
    const article = await request.json();

    const newArticle = await prisma.articles.create({
      data: {
        title: article.title,
        content: article.content,
        category: article.category,
        featuredImage: article.featuredImage,
        excerpt: article.excerpt,
        status: article.status || "draft",
        authorId: userExist?.id || article.authorId,
      },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.log("Error creating article:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
