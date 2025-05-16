"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col bg-white border-b shadow-sm">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xl font-semibold text-black hover:text-primary transition"
          >
            TechBlog
          </Link>
          <div className="hidden md:flex gap-4 text-md text-gray-600 ">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/articles" className="hover:text-black">
              Articles
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
          </div>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/auth/sign-in">
              <Button
                className="hover:border-b-2 hover:border-blue-900 hover:scale-y-110"
                variant="outline"
                size="sm"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button
                className="bg-blue-500 hover:bg-blue-600 hover:border-b-2 border-blue-900 hover:scale-y-110"
                size="sm"
              >
                Sign Up
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-6 border-t border-gray-200">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/articles" className="text-gray-700 hover:text-black">
            Articles
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link href="/auth/sign-in">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:border-b-2 hover:border-blue-900 hover:scale-y-110"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button
                size="sm"
                className="w-full bg-blue-500 hover:bg-blue-600 hover:border-b-2 border-blue-900 hover:scale-y-110"
              >
                Sign Up
              </Button>
            </Link>
          </SignedOut>
        </div>
      )}
    </nav>
  );
}
