
import Link from 'next/link'
function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-12 border-t h-30">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} TechBlog. All rights reserved.</p>
                <div className="flex gap-4">
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
        </footer>

    )
}

export default Footer