'use client';

import { useState } from 'react';
import { 
  Home, 
  Lightbulb, 
  Wallet, 
  TrendingUp, 
  Clock, 
  Shield,
  Users,
  BarChart3,
  Settings,
  HelpCircle
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Lightbulb, label: 'My Ideas', id: 'ideas' },
  { icon: Wallet, label: 'Portfolio', id: 'portfolio' },
  { icon: TrendingUp, label: 'Trending', id: 'trending' },
  { icon: Clock, label: 'Timestamps', id: 'timestamps' },
  { icon: Shield, label: 'ZK Proofs', id: 'proofs' },
  { icon: Users, label: 'Remixes', id: 'remixes' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: HelpCircle, label: 'Help', id: 'help' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <aside className="w-64 glass-effect border-r border-white/10 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">OS</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">OriginStamp</h1>
            <p className="text-gray-400 text-xs">Prove your ideas</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`sidebar-item w-full text-left ${
                    activeItem === item.id ? 'active' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/10">
        <ul className="space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`sidebar-item w-full text-left ${
                    activeItem === item.id ? 'active' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
