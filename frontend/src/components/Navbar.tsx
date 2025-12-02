import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about"}
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 rounded-xl bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF] 
                          shadow-[0_0_20px_rgba(123,93,255,0.3)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] 
                             bg-clip-text text-transparent">
                StudyFlow
              </span>
              <span className="text-xs text-white/60 -mt-1">AI Learning</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-white/80 hover:text-white text-sm font-medium
                         transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 
                               bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]
                               group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-4 ml-8">
              <button
                onClick={() => navigate("/login")}
                className="text-white/80 hover:text-white text-sm font-medium"
              >
                Sign In
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold
                         bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]
                         text-white shadow-[0_0_20px_rgba(123,93,255,0.3)]
                         hover:shadow-[0_0_30px_rgba(123,93,255,0.5)]
                         transition-all duration-300"
              >
                Get Started Free
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-white/80 hover:text-white
                         hover:bg-white/5 rounded-lg px-4 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="block w-full py-3 text-center text-white/80 hover:text-white"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setIsOpen(false);
                }}
                className="block w-full py-3 text-center rounded-xl font-semibold
                         bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] text-white"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glass Effect Background */}
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-xl 
                     border-b border-white/10"></div>
    </motion.nav>
  );
}