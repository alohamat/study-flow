import { motion } from "framer-motion";

export default function FeatSection() {
  const features = [
    {
      title: "Focus Mode",
      description: "Boost your focus with intelligent study sessions.",
      value: "87%",
      metric: "+24% efficiency this week",
      color: "from-[#7B5DFF] to-[#3EC8FF]",
      icon: "🎯"
    },
    {
      title: "Smart Planner",
      description: "Plan your week automatically based on your goals.",
      value: "42",
      metric: "18 tasks completed today",
      color: "from-[#7B5DFF] to-[#9D8AFF]",
      icon: "📊"
    },
    {
      title: "Analytics",
      description: "Track your study progress with clean visuals.",
      value: "5.2h",
      metric: "Daily avg: 4.8 hours",
      color: "from-[#3EC8FF] to-[#7B5DFF]",
      icon: "📈"
    }
  ];

  return (
    <section className="mt-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((feat, index) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
          hover:bg-white/10 hover:shadow-[0_0_25px_rgba(123,93,255,0.15)]
          transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{feat.icon}</div>
                <h3 className="text-xl font-semibold text-white">{feat.title}</h3>
              </div>
              <div className="relative">
                <div className={`w-14 h-14 rounded-full bg-linear-to-br ${feat.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-lg font-bold text-white">{feat.value}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-xs text-white">↑</span>
                </div>
              </div>
            </div>
            
            <p className="text-[#9AA0B5] mb-6">{feat.description}</p>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#9AA0B5]">Progress</span>
                <span className="text-sm font-semibold bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] bg-clip-text text-transparent">
                  {feat.metric}
                </span>
              </div>
              
              {/* progress Bar */}
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: index === 0 ? "87%" : index === 1 ? "75%" : "92%" }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className={`h-full rounded-full bg-linear-to-r ${feat.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}