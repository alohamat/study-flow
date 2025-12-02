import { motion } from "framer-motion";
import { 
  Zap, Twitter, Instagram, Linkedin, Github, 
  Mail, Heart 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-black/30">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF]">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">StudyFlow</h3>
                <p className="text-sm text-white/60">AI-Powered Learning</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Transform your study habits with intelligent AI tools designed for modern learners.
            </p>
            <div className="flex gap-4 pt-2">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 
                           border border-white/10 transition-all"
                >
                  <Icon className="w-5 h-5 text-white/70 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "How It Works", "Pricing", "API", "Status"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Blog", "Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get tips and updates on AI learning.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10
                           text-white placeholder-white/40 text-sm focus:outline-none
                           focus:border-[#7B5DFF] transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-sm
                         bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]
                         text-white hover:shadow-[0_0_20px_rgba(123,93,255,0.3)]
                         transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row 
                       justify-between items-center gap-4">
          <div className="text-white/50 text-sm flex items-center gap-1">
            © {currentYear} StudyFlow. All rights reserved.
            <Heart className="w-4 h-4 text-red-500 ml-1" fill="currentColor" />
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-white/60">100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-white/60">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-xs text-white/60">24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}