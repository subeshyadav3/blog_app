"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CreateArticle() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    featuredImage: "",
    content: "",
    category: "",
    status: "draft",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    console.log("Submitting article:", formData)
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      alert("Article created successfully! Redirecting to dashboard...")

      if (!response.ok) {
      alert("Failed to create article. Please try again.")
        throw new Error("Failed to create article")
      }

      router.push("/dashboard")
    } catch (err) {
      console.error("Error creating article:", err)
      setError("Failed to create article. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.push("/dashboard")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl font-bold">Create New Article</h1>
        <p className="text-gray-500 mt-1">Add a new blog article to your website</p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Article Details</CardTitle>
            <CardDescription>Fill in the information below to create your new blog article.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter article title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
            <Label htmlFor="title">Featured Image</Label>
              <Input
                id="featuredImage"
                name="featuredImage"
                placeholder="Enter article image link"
                value={formData.featuredImage}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                placeholder="Brief summary of the article"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Full article content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={10}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange("category", value)}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="AI">Artificial Intelligence</SelectItem>
                    <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)} required>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.push("/dashboard")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>Create Article</>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
