
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request:Request){
    try {
        const articles = await prisma.articles.findMany();
        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}


export async function POST(request: Request) {
    const user = await prisma.user.findUnique({
        where: {
          email: "subeshgaming@gmail.com",
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
          authorId: user.id || article.authorId,
        },
      });
  
      return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
      console.error("Failed to create article:", error);
  
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  }