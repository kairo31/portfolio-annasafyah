import { Terminal, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [showCursor, setShowCursor] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <footer className="bg-black text-white border-t-[3px] border-[#FFD700]">
      {/* CLI Status Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs">
          {/* Left: System Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00FF00]" />
              <span className="text-[#00FF00]">System Status: ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-[#00FF00]" />
              <span>Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Branch:</span>
              <span className="text-[#FFD700]">main</span>
            </div>
          </div>

          {/* Right: Time and User */}
          <div className="flex items-center gap-6">
            <span className="text-gray-400">{formatTime(currentTime)}</span>
            <span>annasafyah@kairo31</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About */}
            <div>
              <h4 className="font-['JetBrains_Mono'] font-bold mb-3 text-[#FFD700]">
                ~/about
              </h4>
              <p className="font-['JetBrains_Mono'] text-xs text-gray-400 leading-relaxed">
                Physics graduate (Electronics &amp; Instrumentation) who builds
                full data pipelines — from ESP32 sensors to SARIMAX forecasting
                and PPO reinforcement learning agents. Seeking Quality Engineer /
                IoT Engineer roles.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-['JetBrains_Mono'] font-bold mb-3 text-[#FFD700]">
                ~/quick-links
              </h4>
              <ul className="font-['JetBrains_Mono'] text-xs space-y-2">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    → Projects & Research
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    → About & Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    → Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kairo31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    → github.com/kairo31
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-['JetBrains_Mono'] font-bold mb-3 text-[#FFD700]">
                ~/contact
              </h4>
              <div className="font-['JetBrains_Mono'] text-xs space-y-2">
                <p className="text-gray-400">
                  <span className="text-white">Email:</span> annasafyahh@gmail.com
                </p>
                <p className="text-gray-400">
                  <span className="text-white">GitHub:</span> @kairo31
                </p>
                <p className="text-gray-400">
                  <span className="text-white">LinkedIn:</span> in/annasafyahh
                </p>
                <p className="text-gray-400">
                  <span className="text-white">Location:</span> Banyumas,
                  Central Java, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Terminal Prompt */}
      <div className="border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="font-['JetBrains_Mono'] text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#00FF00]">annasafyah@kairo31</span>
              <span className="text-gray-600">:</span>
              <span className="text-blue-600">~</span>
              <span className="text-gray-600">$</span>
              <span className="text-gray-400">
                echo "© 2026 Annasafyah Hayati · All rights reserved"
              </span>
              {showCursor && (
                <span className="inline-block w-2 h-3 bg-white ml-1" />
              )}
            </div>
            <div className="text-gray-600">Built with React + Tailwind CSS</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
