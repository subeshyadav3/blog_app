// // app/api/summarize/route.ts (Next.js API route)
// import { NextResponse } from "next/server";

// const HF_API_TOKEN = process.env.HF_API_TOKEN;

// export async function POST(req: Request) {
//   const { text } = await req.json();

//   const response = await fetch(
//     "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${HF_API_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ inputs: text }),
//     }
//   );

//   if (!response.ok) {
//     return NextResponse.json({ error: "Failed to summarize" }, { status: 500 });
//   }

//   const data = await response.json();
//   return NextResponse.json({ summary: data[0]?.summary_text || "" });
// }
