import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'gradient' | 'purple' | 'blue' | 'green';
}

export default function ProgressBar({
  value,
  max = 100,
  showLabel = true,
  size = 'md',
  color = 'gradient'
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const height = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };
  
  const colors = {
    gradient: 'bg-gradient-to-r from-[#7B5DFF] to-[#3EC8FF]',
    purple: 'bg-[#7B5DFF]',
    blue: 'bg-[#3EC8FF]',
    green: 'bg-green-500'
  };
  
  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span className="text-white/70">Progress</span>
          <span className="text-white font-semibold">{value}/{max} ({percentage.toFixed(0)}%)</span>
        </div>
      )}
      <div className={`w-full ${height[size]} rounded-full bg-white/10 overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${height[size]} rounded-full ${colors[color]}`}
        />
      </div>
    </div>
  );
}