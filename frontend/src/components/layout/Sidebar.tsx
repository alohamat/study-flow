import { 
  Home, 
  Calendar, 
  Clock, 
  BarChart3, 
  Target, 
  Settings,
  LogOut,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Clock, label: 'Focus Mode', path: '/focus' },
  { icon: Calendar, label: 'Planner', path: '/planner' },
  { icon: Target, label: 'Goals', path: '/goals' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const user = { name: "Aloha Mat", email: "mataloha@example.com" }; // Mock data

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-black/30 backdrop-blur-xl border-r border-white/10"
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          <div className="p-2 rounded-xl bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF]">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">StudyFlow</h1>
            <p className="text-xs text-white/60">AI Learning Platform</p>
          </div>
        </motion.div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#7B5DFF] to-[#3EC8FF] flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {user.name.split(' ').map((n) => n[0]).join('')} {/*get user's first initials*/}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-white">{user.name}</h3>
            <p className="text-sm text-white/60">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => navigate(item.path)}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Quick Focus Button */}
      <div className="p-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl bg-linear-to-r from-[#7B5DFF] to-[#3EC8FF] text-white font-semibold flex items-center justify-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Start Focus Session
        </motion.button>
      </div>

      {/* Logout */}
      <div className="p-6 border-t border-white/10">
        <button className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </motion.aside>
  );
}