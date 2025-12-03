// components/dashboard/TaskCard.tsx
import { Clock, PlayCircle, CheckCircle, MoreVertical } from 'lucide-react';
import Card from '../ui/Card';
import ProgressBar from '../dashboard/ProgressBar';
import { motion } from 'framer-motion';

interface TaskCardProps {
  title: string;
  description?: string;
  duration: string;
  progress: number;
  priority: 'low' | 'medium' | 'high';
  subject?: string;
  onStart?: () => void;
  onComplete?: () => void;
}

export default function TaskCard({
  title,
  description,
  duration,
  progress,
  priority,
  subject,
  onStart,
  onComplete
}: TaskCardProps) {
  const priorityColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  };
  
  const priorityLabels = {
    low: 'Low',
    medium: 'Medium',
    high: 'High'
  };
  
  return (
    <Card variant="default" hover padding="md">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${priorityColors[priority]}`} />
          <div>
            <h3 className="font-semibold text-white">{title}</h3>
            {description && (
              <p className="text-sm text-white/60 mt-1">{description}</p>
            )}
          </div>
        </div>
        
        <button className="text-white/40 hover:text-white">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-white/60">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          
          {subject && (
            <span className="px-2 py-1 rounded-lg text-xs bg-white/5 text-white/70">
              {subject}
            </span>
          )}
          
          <span className={`px-2 py-1 rounded-lg text-xs ${priorityColors[priority]} bg-opacity-20 text-white`}>
            {priorityLabels[priority]}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onStart}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <PlayCircle className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onComplete}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <CheckCircle className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
      
      <ProgressBar value={progress} size="sm" />
    </Card>
  );
}