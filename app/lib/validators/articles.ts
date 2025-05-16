import { z } from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  featuredImage: z.string().url({ message: "Featured image must be a valid URL" }),

});



export const userSchema=z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(1, { message: "Name is required" }),
    imageUrl: z.string().url({ message: "Image URL must be valid" }).optional(),
    role: z.string().optional(),
})