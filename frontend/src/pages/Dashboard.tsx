import Sidebar from '../components/layout/Sidebar';
import StatsCard from '../components/dashboard/StatsCard';
import TaskCard from '../components/dashboard/TaskCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Target, Clock, CheckCircle, TrendingUp, Calendar, Zap } from 'lucide-react';

export default function Dashboard() {
  const tasks = [
    { id: 1, title: 'Physics: Quantum Mechanics', duration: '45 min', progress: 75, priority: 'high' as const, subject: 'Physics' },
    { id: 2, title: 'Math: Calculus Problems', duration: '60 min', progress: 50, priority: 'medium' as const, subject: 'Mathematics' },
    { id: 3, title: 'History: World War II Essay', duration: '90 min', progress: 25, priority: 'low' as const, subject: 'History' },
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-[#0A0A1E] to-[#1A0938]">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, Aloha! 👋</h1>
            <p className="text-white/60">Here's your study overview for today</p>
          </div>
          <Button variant="gradient" icon={Zap} size="lg">
            Start Focus Session
          </Button>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            icon={Target}
            value="87%"
            label="Focus Score"
            change="+12%"
            color="purple"
            trend="up"
          />
          <StatsCard
            icon={Clock}
            value="24.5h"
            label="Study Hours"
            change="+3.2h"
            color="blue"
            trend="up"
          />
          <StatsCard
            icon={CheckCircle}
            value="18/24"
            label="Tasks Completed"
            change="+4"
            color="green"
            trend="up"
          />
          <StatsCard
            icon={TrendingUp}
            value="7 days"
            label="Current Streak"
            change="🔥"
            color="orange"
            trend="up"
          />
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tasks */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Today's Tasks</h2>
              <Button variant="secondary" icon={Calendar}>
                View Calendar
              </Button>
            </div>
            
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </div>
          
          {/* Right Column - Quick Stats */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Daily Goal</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">4/6h</div>
                  <div className="text-white/60">Study hours today</div>
                </div>
                {/* Progress bar goingo here */}
              </div>
            </Card>
            
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Upcoming Sessions</h3>
              {/* Session list */}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}