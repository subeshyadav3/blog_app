import OpenAi from 'openai';
import { NextResponse } from 'next/server';


const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const { text } = await request.json();
    console.log('Received text for summarization:', text);
    const prompt = `
    You are a helpful assistant that summarizes technical blog posts clearly and concisely.

The input is HTML content; ignore all HTML tags and focus on the main content.

Please produce the summary as a JSON object with the following fields:

{
  "introduction": "A short, catchy introduction (max  lines) explaining what makes the phone attractive.",
  "tags": {
    "Camera": "best/good/decent/bad",
    "Gaming": "best/good/decent/bad",
    "Display": "best/good/decent/bad"
  },
  "features": [
    "Camera: just give what is it, how much megapixels, and what is the main feature",
    "Display: what is the display type like amoled,size, resolution, and refresh rate",
    "Performance: chip name, and core count",
    "Battery: just give the capacity in mAh",
   
  ],
  "price": "Final price and model variants line."
}

Keep the output concise and helpful for blog readers.

`;  
    

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: prompt,
                },
                {
                    role: "user",
                    content: `Summarize the following techical blog post:\n\n${text}`,
                },
            ]


        })
        const summary = response.choices?.[0]?.message?.content?.trim() || null;

        if (!summary) {
            throw new Error('Failed to Generate Summary');
        }

        return NextResponse.json({ summary }, { status: 200 });

    }
    catch (error) {
        console.error('Error generating summary:', error);
        return NextResponse.json({ error: 'Failed to generate summary' }, { status: 500 });
    }


}


