"use client";

import { articleSchema } from "@/app/lib/validators/articles";
import React, { useState } from "react";

type ArticleInput = Zod.infer<typeof articleSchema>;

export default  function CreateArticle() {
      
    const [formData, setFormData] = useState<ArticleInput>({
        title: "",
        content: "",
        category: "",
        featuredImage: "",

    });

    const [errors, setErrors] = useState({})
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        const result = articleSchema.safeParse(formData)

        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
        }
        else {
            setErrors({});
            console.log("Submitting", result.data);
        }
 
        try {
            const response = await fetch("/api/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });


            if (!response.ok) {

                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create article");
            }
            

        } catch (error) {
            console.error("Error creating article:", error);
            alert("Something went wrong!");
        }


    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <main className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Create New Article</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Article title"
                        type="text"
                    />
                    {errors.title && <p className="text-red-600">{errors.title}</p>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Article content"
                        rows={6}
                    />
                    {errors.content && <p className="text-red-600">{errors.content}</p>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <input
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Category"
                        type="text"
                    />
                    {errors.category && <p className="text-red-600">{errors.category}</p>}
                </div>

                <div>
                    <label className="block font-semibold mb-1">Featured Image URL</label>
                    <input
                        name="featuredImage"
                        value={formData.featuredImage}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="https://example.com/image.jpg"
                        type="url"
                    />
                    {errors.featuredImage && <p className="text-red-600">{errors.featuredImage}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Create Article
                </button>
            </form>

        </main>
    )
}