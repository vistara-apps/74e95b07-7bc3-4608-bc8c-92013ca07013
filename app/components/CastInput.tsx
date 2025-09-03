'use client';

import { useState } from 'react';
import { Send, Hash, Clock } from 'lucide-react';
import { RoyaltySlider } from './RoyaltySlider';

interface CastInputProps {
  variant?: 'default' | 'withTimestamp';
  onSubmit?: (content: string, royalty: number) => void;
}

export function CastInput({ variant = 'default', onSubmit }: CastInputProps) {
  const [content, setContent] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState(5);
  const [showTimestamp, setShowTimestamp] = useState(variant === 'withTimestamp');

  const handleSubmit = () => {
    if (content.trim() && onSubmit) {
      onSubmit(content, royaltyPercentage);
      setContent('');
    }
  };

  const currentTime = new Date().toLocaleString();

  return (
    <div className="glass-effect rounded-xl p-6 border border-white/10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="w-5 h-5 text-purple-400" />
          <h3 className="text-white font-semibold">Timestamp Your Idea</h3>
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your groundbreaking idea here... This will be timestamped and minted as a ZK-verified token."
          className="input-field w-full h-32 resize-none"
          maxLength={500}
        />

        <div className="flex justify-between text-sm text-gray-400">
          <span>{content.length}/500 characters</span>
          {showTimestamp && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          )}
        </div>

        <RoyaltySlider
          value={royaltyPercentage}
          onChange={setRoyaltyPercentage}
        />

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={!content.trim()}
            className="btn-primary flex items-center gap-2 flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            Mint & Timestamp Idea
          </button>
          <button
            onClick={() => setShowTimestamp(!showTimestamp)}
            className="btn-secondary px-4"
          >
            <Clock className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs text-gray-400 leading-relaxed">
          <p>💡 Your idea will be:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Timestamped with ZK-proof verification</li>
            <li>Stored immutably on IPFS via Pinata</li>
            <li>Minted as an NFT on Base blockchain</li>
            <li>Protected with {royaltyPercentage}% remix royalty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
