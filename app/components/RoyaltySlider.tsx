'use client';

import { useState } from 'react';
import { Percent } from 'lucide-react';

interface RoyaltySliderProps {
  value: number;
  onChange: (value: number) => void;
  variant?: 'default';
}

export function RoyaltySlider({ value, onChange, variant = 'default' }: RoyaltySliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Percent className="w-4 h-4 text-purple-400" />
          <label className="text-sm font-medium text-gray-300">
            Remix Royalty
          </label>
        </div>
        <span className="text-purple-400 font-semibold">{value}%</span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min="0"
          max="25"
          step="0.5"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <div 
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg pointer-events-none"
          style={{ width: `${(value / 25) * 100}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span>0%</span>
        <span>25%</span>
      </div>
      
      <p className="text-xs text-gray-400">
        You'll earn {value}% royalty from any remixes or derivatives of your idea
      </p>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #a855f7;
          cursor: pointer;
          box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #a855f7;
          cursor: pointer;
          border: 2px solid rgba(168, 85, 247, 0.3);
        }
      `}</style>
    </div>
  );
}
