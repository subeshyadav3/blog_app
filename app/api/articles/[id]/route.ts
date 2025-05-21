
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const article = await prisma.articles.findUnique({
      where: {
        id: id,
      },
    });

    if (!article) {
      return new Response("Article not found", { status: 404 });
    }

    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}



export async function PUT(
    request: Request,
    {params}: { params:  { id: string } },
) {
    const { id } =  params;
    console.log(id)
    const data = await request.json();
    try {
        const article = await prisma.articles.update({
            where: { id },
            data,
          });

        if(!article) {
            return new Response("Article not found", { status: 404 });
        }
        return NextResponse.json(article, { status: 200 });
    }

    catch (error) {
        console.error("Failed to update article:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}


export async function DELETE(
    request: Request,
    {params}: { params:  { id: string } },
){
    const { id } =  params;
    try {
        const article = await prisma.articles.delete({
            where: { id },
          });

        if(!article) {
            return new Response("Article not found", { status: 404 });
        }
        return NextResponse.json(article, { status: 200 });
    }

    catch (error) {
        console.error("Failed to delete article:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}