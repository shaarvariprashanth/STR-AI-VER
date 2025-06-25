import { AnimatedTooltipPreview } from "./ui/animated-tooltip-comp";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4  ">
        
        <div className="flex items-center space-x-3">
          <span className="text-green-400 text-4xl">{`</>`}</span>
          <h1 className="text-4xl font-bold">STR-AI-VER</h1>
        </div>

        
            <div className="text-right">
            <h2 className="text-lg font-semibold mb-3">Product</h2>
            <ul className="space-y-2 text-gray-300">
                <li><a href="#resources">Resources</a></li>
                <li><a href="#">Subscription</a></li>
                <li><a href="https://takeuforward.org/blogs" target="_blank">Blogs</a></li>
            </ul>
            </div>


       
            <div className="text-right">
            <h2 className="text-lg font-semibold mb-3">Social</h2>
            <ul className="space-y-2 text-gray-300">
                <li><a href="https://github.com/shaarvariprashanth">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/shaarvari-prashanth-5764b6331/">LinkedIn</a></li>
            </ul>
            </div>

            <div className="object-bottom-right pl-20 pt-5">
                <AnimatedTooltipPreview/>
            </div>
        
      </div>

      <div className="mt-8 text-gray-500 text-right">
        © 2025 STR-AI-VER. All rights reserved.
      </div>
    </footer>
  );
}
