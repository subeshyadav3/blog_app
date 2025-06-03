'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, ArrowLeft, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Article = {
  id: string
  title: string
  content: string
  category: string
  featuredImage: string
}

function ArticleDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { id } = params

  const [data, setData] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/articles/${id}`)
        if (!res.ok) throw new Error("Failed to fetch article")
        const article = await res.json()
        setData(article)
      } catch (err) {
        setError("Failed to load article. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error ?? "Article not found."}</AlertDescription>
        </Alert>
        <Button variant="ghost" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="ghost" onClick={() => router.push("/dashboard")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>
      <div className="max-w-3xl mx-auto">
        <img
          src={data.featuredImage}
          alt={data.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-4">#{data.category}</p>
        <p className="text-lg text-gray-800 whitespace-pre-line">{data.content}</p>
      </div>
    </div>
  )
}

export default ArticleDetails
