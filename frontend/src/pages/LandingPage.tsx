import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, TrendingUp, Users, Clock, Target } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "10K+", label: "Active Students" },
    { icon: <Clock className="w-5 h-5" />, value: "500K+", label: "Study Hours" },
    { icon: <Target className="w-5 h-5" />, value: "94%", label: "Success Rate" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "+200%", label: "Focus Boost" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#0A0A1E] to-[#1A0938] overflow-hidden">
      <Navbar />
      {/*Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div> {/*Cosmic background */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div> 
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"> {/*20 stars random position */}
          {[...Array(20)].map((_, i) => ( 
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#7B5DFF]" />
            <span className="text-sm font-medium text-white">
              🚀 AI-Powered Study Platform
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
              <span className="bg-linear-to-r from-[#7B5DFF] via-[#3EC8FF] to-[#9D8AFF] bg-clip-text text-transparent bg-300% animate-gradient">
                Study Flow
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 font-medium">
                Your <span className="text-[#7B5DFF] font-bold">AI-powered</span> study companion that 
                <span className="text-[#3EC8FF] font-bold"> adapts</span> to your learning style
              </h2>
              
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Transform how you study with intelligent focus sessions, personalized planning, 
                and real-time analytics. Join thousands of students already boosting their productivity.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
              className="group px-8 py-4 rounded-xl cursor-pointer
                bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]
                text-white font-semibold text-lg
                shadow-[0_0_40px_rgba(123,93,255,0.3)]
                hover:shadow-[0_0_60px_rgba(123,93,255,0.5)]
                transition-all duration-300
                flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Start NOW. 100% Free.
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/demo")}
              className="px-8 py-4 rounded-xl cursor-pointer
                bg-white/5 backdrop-blur-xl
                border border-white/10
                text-white font-medium
                hover:bg-white/10
                transition-all duration-300"
            >
              🎬 Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 w-full max-w-4xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl
                  border border-white/10 text-center
                  hover:bg-white/5 hover:border-white/20
                  transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-linear-to-br from-[#7B5DFF]/20 to-[#3EC8FF]/20">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-white/50 text-sm">Explore Features</div>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
              <div className="w-1 h-3 rounded-full bg-white/50"></div>
            </div>
          </motion.div>
        </div>

        {/* Animated Preview Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Experience the Future of Studying
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                See how Study Flow transforms your learning experience with cutting-edge AI technology
              </p>
            </div>
            
            {/* Mockup Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-[#7B5DFF]/20 to-[#3EC8FF]/20 blur-3xl rounded-3xl"></div>
              <div className="relative p-1 rounded-3xl bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]">
                <div className="bg-[#0A0A1E] rounded-2xl p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-3 rounded-full bg-white/10"></div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 rounded-xl bg-linear-to-r from-white/5 to-white/10"></div>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradilinearent-to-r from-[#7B5DFF] to-[#3EC8FF] rounded-2xl blur opacity-30"></div>
                      <div className="relative h-64 rounded-xl bg-[#12122E] p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-4 w-24 rounded-full bg-white/20"></div>
                          <div className="h-8 w-8 rounded-full bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]"></div>
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="h-3 w-3 rounded-full bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]"></div>
                              <div className="h-2 w-full rounded-full bg-white/10"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <style>{/*animates the h1 gradient */}{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
      <Footer />
    </div>
  );
}