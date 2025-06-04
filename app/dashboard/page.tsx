"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Pencil, Trash2, Eye, Plus, MoreHorizontal, Loader2, RefreshCw, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

// Types
interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  status: "published" | "draft"
  createdAt: string
  updatedAt: string
}

export default function Dashboard() {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    categories: 0,
  })

  const fetchArticles = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/articles")

      if (!response.ok) {
        throw new Error("Failed to fetch articles")
      }

      const data:Article[] = await response.json()
      setArticles(data)

 
      const published = data.filter((article) => article.status === "published").length
      const draft = data.filter((article) => article.status === "draft").length
      const uniqueCategories = new Set(data.map((article) => article.category)).size

      setStats({
        total: data.length,
        published,
        draft,
        categories: uniqueCategories,
      })
    } catch (err) {
      console.error("Error fetching articles:", err)
      setError("Failed to load articles. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }


  const deleteArticle = async () => {
    if (!articleToDelete) return

    setIsDeleting(true)

    try {
      const response = await fetch(`/api/articles/${articleToDelete}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete article")
      }

    
      setArticles(articles.filter((article) => article.id !== articleToDelete))

    
      const deletedArticle = articles.find((article) => article.id === articleToDelete)
      if (deletedArticle) {
        setStats({
          ...stats,
          total: stats.total - 1,
          published: deletedArticle.status === "published" ? stats.published - 1 : stats.published,
          draft: deletedArticle.status === "draft" ? stats.draft - 1 : stats.draft,
        })
      }
    } catch (err) {
      console.error("Error deleting article:", err)
      setError("Failed to delete article. Please try again.")
    } finally {
      setIsDeleting(false)
      setDeleteDialogOpen(false)
      setArticleToDelete(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }


  const handleViewArticle = (id: string) => {
    router.push(`/articles/${id}`)
  }

  const handleEditArticle = (id: string) => {
    router.push(`/dashboard/edit/${id}`)
  }


  const handleDeleteArticle = (id: string) => {
    setArticleToDelete(id)
    setDeleteDialogOpen(true)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Blog Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage your blog articles</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button onClick={() => fetchArticles()} variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button onClick={() => router.push("/dashboard/create")}>
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.published}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.draft}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.categories}</div>
          </CardContent>
        </Card>
      </div>

   
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      
      <Card>
        <CardHeader>
          <CardTitle>Articles</CardTitle>
          <CardDescription>A list of all your blog articles.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No articles found. Create your first article to get started.
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.category}</TableCell>
                      <TableCell>
                        <Badge variant={article.status === "published" ? "default" : "secondary"}>
                          {article.status === "published" ? "Published" : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(article.updatedAt || article.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewArticle(article.id)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditArticle(article.id)}>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDeleteArticle(article.id)}
                              className="text-red-600 focus:text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>


      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this article?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the article.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deleteArticle} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>Delete</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
