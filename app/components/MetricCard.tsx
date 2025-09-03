'use client';

import { ReactNode } from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon?: LucideIcon;
  color?: 'blue' | 'purple' | 'green' | 'orange';
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  color = 'purple' 
}: MetricCardProps) {
  const colorClasses = {
    blue: 'border-blue-500/20 hover:border-blue-500/40',
    purple: 'border-purple-500/20 hover:border-purple-500/40',
    green: 'border-green-500/20 hover:border-green-500/40',
    orange: 'border-orange-500/20 hover:border-orange-500/40',
  };

  return (
    <div className={`metric-card rounded-xl p-6 transition-all duration-200 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`p-2 rounded-lg bg-${color}-500/20`}>
              <Icon className={`w-5 h-5 text-${color}-400`} />
            </div>
          )}
          <h3 className="text-gray-300 text-sm font-medium">{title}</h3>
        </div>
        {change && trend && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
            trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{change}</span>
          </div>
        )}
      </div>
      
      <div className="text-white text-2xl font-bold mb-1">{value}</div>
    </div>
  );
}
