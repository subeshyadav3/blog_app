"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function PostSignupPage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return;

      const response=await fetch("/api/sync-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: user.fullName || "Unnamed",
          imageUrl: user.imageUrl,
          role: user.publicMetadata?.role || "user",
        }),
      });
      console.log("Response from sync-user:", response);
      router.push("/"); 
    };

    syncUser();
  }, [user, router]);

  return <p>Setting things up...</p>;
}
