import Footer from "./components/footer/page";
import { HeroSection } from "./components/home/hero-section";
import Navbar from "./components/home/nav"
import RecentBlog from "./components/home/recent-blog";

export default function Homepage() {
 

  return (
    <div>
     
      <HeroSection />
      <RecentBlog />
      
    </div>
  );
}
