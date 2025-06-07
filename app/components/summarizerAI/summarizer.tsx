"use client";
import { useState, useEffect } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Summary={
  introduction: string;
  tags: {
    Camera: string;
    Gaming: string;
    Display: string;
  };
  features: string[];
  price: string;
  
}
export default function Summarizer({content}: { content: string }) {

    const [summary, setSummary] = useState<Summary | null>(null);
    const [trigger, setTrigger] = useState(false);
    const [loading,setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/summarizer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: content }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate summary");
            }

            const data = await response.json();
            const parsedSummary = typeof data.summary === "string" ? JSON.parse(data.summary) : data.summary;
            setSummary(parsedSummary);
        } catch (error) {
            console.error("Error generating summary:", error);
            alert("Failed to generate summary. Please try again later.");
        }
    }

    useEffect(() => {
      console.log("Content for summarization:", summary?.introduction);
    }
    , [summary]);
    return (

        <Drawer open={trigger} onOpenChange={setTrigger}>
        <DrawerTrigger
          className="
         
            absolute right-5 z-50 w-10 h-10 rounded-full animate-spin  hover:animate-none bg-violet-500 text-white flex items-center justify-center
            before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-violet-400/50
            before:animate-ping before:-z-10
          "
        >
          AI
        </DrawerTrigger>
      
        <DrawerContent className="mx-5 mb-2">
        <DrawerClose className="absolute right-0">
              <X className=" w-6 h-6 m-2 " />
            </DrawerClose>
          <DrawerHeader>
            <DrawerTitle>Post Summarizer</DrawerTitle>
            <DrawerDescription>Bored of reading entire post, We can summarize it.</DrawerDescription>
          </DrawerHeader>
          <div className="px-5 ">
            <div className="flex flex-col space-y-4 overflow-y-scroll">
              {summary ? (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Summary</h3>
                  <p>{summary.introduction}</p>
                  <h4 className="font-medium">Tags:</h4>
                  <h2 className="text-sm text-gray-500 mb-2">{"Best > Good > Bad"}</h2>
                  <ul className="list-disc pl-5">
                    <li>Camera: {summary.tags.Camera}</li>
                    <li>Gaming: {summary.tags.Gaming}</li>
                    <li>Display: {summary.tags.Display}</li>
                  </ul>
                  <h4 className="font-medium">Features:</h4>
                  <ul className="list-disc pl-5">
                    {summary.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p><strong>Price:</strong> {summary.price}</p>
                </div>
              ) : ""}
            </div>
          </div>


          <DrawerFooter>
           {summary ? "":(
             <Button onClick={handleClick} className={`w-fit mx-auto ${loading?"animate-pulse":""}`}>{loading?"Summarizing....":"Summarize"}</Button>
           )}
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
  
    );
}