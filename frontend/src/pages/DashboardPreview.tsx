import { motion } from "framer-motion";
import { 
  Zap, Calendar, Clock, TrendingUp, 
  CheckCircle, PlayCircle, Target, BarChart3,
  Bell, Settings, User, LogIn
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardPreview() {
  const navigate = useNavigate();

  const mockTasks = [
    { id: 1, title: "Physics Chapter 5", time: "45 min", progress: 75, priority: "high" },
    { id: 2, title: "Math Exercises", time: "30 min", progress: 50, priority: "medium" },
    { id: 3, title: "History Essay", time: "60 min", progress: 25, priority: "low" },
    { id: 4, title: "Chemistry Lab Report", time: "90 min", progress: 0, priority: "medium" },
  ];

  const mockStats = [
    { label: "Focus Score", value: "87%", change: "+12%", icon: <Target /> },
    { label: "Weekly Hours", value: "24.5h", change: "+3.2h", icon: <Clock /> },
    { label: "Tasks Done", value: "18/24", change: "+4", icon: <CheckCircle /> },
    { label: "Streak", value: "7 days", change: "🔥", icon: <TrendingUp /> },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0A0A1E] to-[#1A0938]">
      {/* Navbar Preview */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">StudyFlow</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <Bell className="w-5 h-5 text-white/60 cursor-pointer hover:text-white" />
              <Settings className="w-5 h-5 text-white/60 cursor-pointer hover:text-white" />
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] 
                            flex items-center justify-center cursor-pointer">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
              className="px-6 py-2.5 rounded-xl font-semibold
                       bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]
                       text-white shadow-lg flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Sign Up Free
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-4 pb-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome to Your <span className="bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] bg-clip-text text-transparent">Study Dashboard</span>
          </h1>
          <p className="text-white/70">
            This is how your personalized study space will look. Start for free to save your progress.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {mockStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-white/10">
                  <div className="text-[#7B5DFF]">{stat.icon}</div>
                </div>
                <span className="text-sm px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Today's Tasks */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Focus */}
            <div className="rounded-2xl bg-linear-to-br from-[#7B5DFF]/10 to-[#3EC8FF]/10 p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Today's Focus Session</h2>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">Starts in 15 min</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {mockTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ x: 5 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div>
                        <h3 className="text-white font-medium">{task.title}</h3>
                        <p className="text-sm text-white/60">{task.time} • {task.progress}% done</p>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Daily Progress</span>
                  <span className="text-white font-semibold">65%</span>
                </div>
                <div className="h-2 mt-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] w-[65%]"></div>
                </div>
              </div>
            </div>

            {/* Study Calendar */}
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">This Week's Plan</h2>
              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div key={day} className="text-center">
                    <div className="text-white/60 text-sm mb-2">{day}</div>
                    <div className={`w-10 h-10 rounded-lg mx-auto flex items-center justify-center
                      ${i === 3 ? 'bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF] text-white' : 
                        'bg-white/5 text-white/70'}`}>
                      {i + 1}
                    </div>
                    <div className="mt-2">
                      <div className="w-full h-1 rounded-full bg-white/10 mx-auto">
                        <div className={`h-full rounded-full ${
                          i < 3 ? 'bg-green-500' : i === 3 ? 'bg-[#7B5DFF]' : 'bg-white/20'
                        }`} style={{ width: `${Math.random() * 60 + 40}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions ad Analytics */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { icon: <Zap />, label: "Start Focus Session", color: "from-[#7B5DFF] to-[#3EC8FF]" },
                  { icon: <Calendar />, label: "Plan Next Week", color: "from-[#3EC8FF] to-[#9D8AFF]" },
                  { icon: <BarChart3 />, label: "View Analytics", color: "from-[#9D8AFF] to-[#7B5DFF]" },
                ].map((action) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ x: 5 }}
                    className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 
                             border border-white/10 flex items-center gap-4 transition-all"
                  >
                    <div className={`p-2 rounded-lg bg-linear-to-r ${action.color}`}>
                      <div className="text-white">{action.icon}</div>
                    </div>
                    <span className="text-white font-medium">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Focus Analytics */}
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">Focus Analytics</h2>
              <div className="space-y-4">
                {[
                  { label: "Morning", value: 85, time: "8-12 AM" },
                  { label: "Afternoon", value: 65, time: "12-5 PM" },
                  { label: "Evening", value: 92, time: "5-10 PM" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">{item.label} • {item.time}</span>
                      <span className="text-white font-semibold">{item.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF]"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cta Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF] p-6 text-center"
            >
              <Zap className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ready to Start?</h3>
              <p className="text-white/90 mb-6">
                Save your progress, track analytics, and unlock premium features.
              </p>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/signup")}
                  className="w-full py-3 rounded-xl bg-white text-[#7B5DFF] font-bold hover:bg-white/90"
                >
                  Create Free Account
                </motion.button>
                <button
                  onClick={() => navigate("/login")}
                  className="w-full py-3 rounded-xl bg-white/20 text-white font-medium hover:bg-white/30"
                >
                  I Already Have an Account
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Demo Watermark */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            This is a preview of your dashboard. Sign up to start using StudyFlow with your real data.
          </p>
        </div>
      </main>
    </div>
  );
}