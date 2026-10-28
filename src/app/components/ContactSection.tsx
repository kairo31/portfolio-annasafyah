import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      handle: "@kairo31",
      url: "https://github.com/kairo31",
      color: "#FFD700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "in/annasafyahh",
      url: "https://linkedin.com/in/annasafyahh",
      color: "#00FF00",
    },
    {
      icon: Mail,
      label: "Email",
      handle: "annasafyahh@gmail.com",
      url: "mailto:annasafyahh@gmail.com",
      color: "#FFD700",
    },
    {
      icon: MapPin,
      label: "Location",
      handle: "Banyumas, Indonesia",
      url: "#",
      color: "#00FF00",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block bg-black text-white px-4 py-2 border-[2px] border-black mb-4">
            <h2 className="font-['JetBrains_Mono'] text-sm">
              <span className="text-[#00FF00]">cat</span> contact.txt
            </h2>
          </div>
          <h3 className="text-4xl font-['Space_Grotesk'] font-bold mb-4">
            Get In Touch
          </h3>
          <p className="font-['JetBrains_Mono'] text-sm text-gray-600 max-w-2xl leading-relaxed">
            // Seeking Quality Engineer / IoT Engineer roles. Open to
            research collaborations, internships, or just a good conversation
            about sensors and reinforcement learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="bg-black text-white px-4 py-2 border-b-[2px] border-black">
              <span className="font-['JetBrains_Mono'] text-sm font-bold">
                send_message.sh
              </span>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="font-['JetBrains_Mono'] text-sm font-bold mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-[2px] border-black font-['JetBrains_Mono'] text-sm focus:outline-none focus:shadow-[4px_4px_0_0_#FFD700]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="font-['JetBrains_Mono'] text-sm font-bold mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-[2px] border-black font-['JetBrains_Mono'] text-sm focus:outline-none focus:shadow-[4px_4px_0_0_#FFD700]"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="font-['JetBrains_Mono'] text-sm font-bold mb-2 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border-[2px] border-black font-['JetBrains_Mono'] text-sm focus:outline-none focus:shadow-[4px_4px_0_0_#FFD700] resize-none"
                  rows={6}
                  placeholder="Tell me about the opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-4 border-[3px] border-black shadow-[6px_6px_0_0_#00FF00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-['JetBrains_Mono'] font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-6">
            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="bg-white border-[2px] border-black p-6 hover:translate-x-1 hover:translate-y-1 transition-all group flex flex-col"
                  style={{ boxShadow: `4px 4px 0 0 ${link.color}` }}
                >
                  <link.icon className="w-8 h-8 mb-3" />
                  <span className="font-['JetBrains_Mono'] text-sm font-bold block">
                    {link.label}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-gray-500 mt-1 break-all">
                    {link.handle}
                  </span>
                </a>
              ))}
            </div>

            {/* Direct Contact Info */}
            <div className="bg-black text-white border-[3px] border-black p-8 shadow-[8px_8px_0_0_#FFD700]">
              <h4 className="font-['JetBrains_Mono'] font-bold text-[#FFD700] mb-6">
                // Direct Contact
              </h4>
              <div className="font-['JetBrains_Mono'] text-sm space-y-3">
                <div>
                  <span className="text-gray-400">Email:</span>
                  <br />
                  <a
                    href="mailto:annasafyahh@gmail.com"
                    className="text-white hover:text-[#00FF00] transition-colors"
                  >
                    annasafyahh@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <br />
                  <a
                    href="tel:+6283861379830"
                    className="text-white hover:text-[#00FF00] transition-colors"
                  >
                    +62 838-6137-9830
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Location:</span>
                  <br />
                  <span className="text-white">
                    Banyumas, Central Java, Indonesia
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Availability:</span>
                  <br />
                  <span className="text-[#00FF00]">
                    ● Open to opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="bg-white border-[2px] border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <div className="font-['JetBrains_Mono'] text-xs space-y-2">
                <div className="text-gray-600">$ response_time --estimate</div>
                <div className="text-black">
                  → Email:{" "}
                  <span className="text-[#00FF00]">Within 24 hours</span>
                </div>
                <div className="text-black">
                  → LinkedIn:{" "}
                  <span className="text-[#FFD700]">Within 48 hours</span>
                </div>
                <div className="text-gray-600 mt-3">
                  // All messages read personally — no bots
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
