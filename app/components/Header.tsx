'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Search, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  minimal?: boolean;
}

export function Header({ minimal = false }: HeaderProps) {
  if (minimal) {
    return (
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OS</span>
            </div>
            <span className="text-white font-semibold text-lg">OriginStamp</span>
          </div>
          <ConnectWallet />
        </div>
      </header>
    );
  }

  return (
    <header className="glass-effect border-b border-white/10">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-white text-xl font-semibold">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search ideas..."
              className="input-field pl-10 w-64"
            />
          </div>
          
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-300" />
          </button>
          
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-300" />
          </button>
          
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
