import { Terminal, Github, Mail, Linkedin } from "lucide-react";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white border-b-[3px] border-black shadow-[0_4px_0_0_#FFD700]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FFD700] border-2 border-white flex items-center justify-center">
            <Terminal className="w-5 h-5 text-black" />
          </div>
          <span className="font-['JetBrains_Mono'] font-bold text-[#FFD700]">
            ~/annasafyah
          </span>
        </div>

        {/* Right: Terminal-style Navigation */}
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="font-['JetBrains_Mono'] text-sm hover:text-[#FFD700] transition-colors"
          >
            <span className="text-[#00FF00]">cd</span> ~/about
          </a>
          <a
            href="#projects"
            className="font-['JetBrains_Mono'] text-sm hover:text-[#FFD700] transition-colors"
          >
            <span className="text-[#00FF00]">ls</span> ./projects
          </a>
          <a
            href="#contact"
            className="font-['JetBrains_Mono'] text-sm hover:text-[#FFD700] transition-colors"
          >
            <span className="text-[#00FF00]">cat</span> contact.txt
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-600">
            <a
              href="https://github.com/kairo31"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/annasafyahh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:annasafyahh@gmail.com"
              className="hover:text-[#FFD700] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
