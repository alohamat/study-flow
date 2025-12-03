import type { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  change: string;
  color?: 'purple' | 'blue' | 'green' | 'orange';
  trend?: 'up' | 'down' | 'neutral';
}

export default function StatsCard({
  icon: Icon,
  value,
  label,
  change,
  color = 'purple',
  trend = 'up'
}: StatsCardProps) {
  const colors = {
    purple: 'from-[#7B5DFF] to-[#9D8AFF]',
    blue: 'from-[#3EC8FF] to-[#7B5DFF]',
    green: 'from-green-500 to-emerald-400',
    orange: 'from-orange-500 to-yellow-500'
  };
  
  const trendColors = {
    up: 'bg-green-500/20 text-green-400',
    down: 'bg-red-500/20 text-red-400',
    neutral: 'bg-gray-500/20 text-gray-400'
  };
  
  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  };
  
  return (
    <Card variant="glass" hover={false} padding="md">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-linear-to-br ${colors[color]} bg-opacity-20`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${trendColors[trend]}`}>
          {trendIcons[trend]} {change}
        </span>
      </div>
      
      <div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-white/60">{label}</div>
      </div>
      
      {/* Mini progress bar */}
      <div className="mt-4 h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.random() * 70 + 30}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full rounded-full bg-linear-to-r ${colors[color]}`}
        />
      </div>
    </Card>
  );
}