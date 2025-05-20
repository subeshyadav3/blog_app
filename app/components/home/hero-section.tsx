"use client";
import { Button } from "@/components/ui/button"
import { ImageSlider } from "./image-slider"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
    const handleSubscribe = () => {
      
        alert("Subscribed!");
    }
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 ">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                        <Badge variant="outline" className="px-3 py-1 text-sm">
                            Welcome to our Blog
                        </Badge>
                        <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Insights, Stories, and Ideas Worth Sharing
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-[700px]">
                            Explore thought-provoking articles across a wide range of topics written by our passionate contributors.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="/articles">
                                <Button>Latest Articles</Button>
                            </Link>

                            
                                <Button variant="outline" onClick={handleSubscribe}>Subscribe</Button>
                            
                        </div>
                    </div>

                    <div className="w-full max-w-4xl mx-auto">
                        <div className="space-y-2 mb-4">
                            <h2 className="text-xl font-medium">Featured Articles</h2>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>
                        <div className="bg-card rounded-xl p-4 shadow-sm">
                            <ImageSlider />
                        </div>
                        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                            <p>Showing 3 of 12 featured articles</p>
                            <Button variant="link" size="sm" className="font-medium">
                                View all articles →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
