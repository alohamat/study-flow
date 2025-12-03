import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'gradient' | 'glass';
  children: ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  variant = 'default',
  children,
  hover = true,
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const baseClasses = "rounded-2xl border transition-all duration-300";
  
  const variants = {
    default: "bg-white/5 border-white/10 backdrop-blur-sm",
    gradient: "bg-gradient-to-br from-[#7B5DFF]/10 to-[#3EC8FF]/10 border-white/10",
    glass: "bg-white/5 backdrop-blur-xl border-white/10"
  };
  
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  const hoverClass = hover 
    ? "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(123,93,255,0.1)]" 
    : "";
  
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}