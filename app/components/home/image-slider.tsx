import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useRouter } from "next/navigation"

export function ImageSlider() {
  const router= useRouter()
  const featuredPosts = [
    {
      id: 1,
      title: "Nothing Phone (3a) Pro review:",
      category: "mobile",
      date: "May 20, 2025",
      link:"/articles/cmbkz7rjl0001ji04ck12hxpf",
      image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2025/04/Nothing-Phone-3a-Pro-Design.jpg",
    },
    {
      id: 2,
      title: "Honor X8C Review:",
      category: "mobile",
      date: "May 20, 2025",
      link:"/articles/cmbkzayz80003ji04fmey9m84",
      image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2025/04/Honor-X8c-Design.jpg",
    },
    {
      id: 3,
      title: "Acer Nitro V 2023",
      category: "Web Development",
      date: "May 20, 2025",
      link:"/articles/cmbkzpdmw0003k004ob54l946",
      image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2023/09/Acer-Nitro-V-design.jpg",
    }
  ]


  return (
    <Carousel className="w-full">
      <CarouselContent>
        {featuredPosts.map((post) => (
          <CarouselItem key={post.id} 
            className="cursor-pointer"
          onClick={()=> 
            router.push(post.link)
          }>
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
