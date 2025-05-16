import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ImageSlider() {

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      category: "Technology",
      date: "May 12, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Understanding Modern JavaScript",
      category: "Programming",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Designing for Accessibility",
      category: "Design",
      date: "May 8, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "The Rise of AI in Content Creation",
      category: "Artificial Intelligence",
      date: "May 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Building Sustainable Digital Products",
      category: "Sustainability",
      date: "May 2, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {featuredPosts.map((post) => (
          <CarouselItem key={post.id}>
            <div className="p-1">
              <Card className="overflow-hidden border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-primary/80 hover:bg-primary/90 text-white">
                            {post.category}
                          </Badge>
                          <span className="text-sm opacity-80">{post.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
