import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  loading?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  loading = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = "font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20",
    secondary: "bg-white/5 border border-white/5 text-white/80 hover:text-white hover:bg-white/10",
    ghost: "text-white/60 hover:text-white hover:bg-white/5",
    gradient: "bg-gradient-to-r from-[#7B5DFF] to-[#3EC8FF] text-white shadow-[0_0_20px_rgba(123,93,255,0.3)] hover:shadow-[0_0_30px_rgba(123,93,255,0.5)]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </motion.button>
  );
}