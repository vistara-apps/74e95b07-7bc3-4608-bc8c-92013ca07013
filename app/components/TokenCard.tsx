'use client';

import { Share2, Eye, Heart, Clock, Shield, Zap } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface TokenCardProps {
  variant: 'original' | 'remix';
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  royalty?: number;
  views?: number;
  likes?: number;
  remixes?: number;
  zkVerified?: boolean;
  author?: string;
  originalId?: string; // For remix cards
}

export function TokenCard({
  variant,
  id,
  title,
  content,
  timestamp,
  royalty,
  views = 0,
  likes = 0,
  remixes = 0,
  zkVerified = true,
  author = 'Anonymous',
  originalId
}: TokenCardProps) {
  const isOriginal = variant === 'original';
  
  return (
    <div className={`glass-effect rounded-xl p-6 border transition-all duration-200 hover:scale-[1.02] ${
      isOriginal 
        ? 'border-purple-500/30 hover:border-purple-500/50' 
        : 'border-blue-500/30 hover:border-blue-500/50'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            isOriginal ? 'bg-purple-500/20' : 'bg-blue-500/20'
          }`}>
            <Zap className={`w-5 h-5 ${
              isOriginal ? 'text-purple-400' : 'text-blue-400'
            }`} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>by {author}</span>
              {zkVerified && (
                <div className="flex items-center gap-1 text-green-400">
                  <Shield className="w-3 h-3" />
                  <span>ZK Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isOriginal 
              ? 'bg-purple-500/20 text-purple-300' 
              : 'bg-blue-500/20 text-blue-300'
          }`}>
            {isOriginal ? 'Original' : 'Remix'}
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-300 mb-4 line-clamp-3">{content}</p>

      {/* Remix Source */}
      {!isOriginal && originalId && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-xs text-gray-400 mb-1">Remixed from:</p>
          <p className="text-sm text-blue-400 hover:underline cursor-pointer">
            Original Idea #{originalId}
          </p>
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{formatDistanceToNow(timestamp, { addSuffix: true })}</span>
        </div>
        {royalty && (
          <div className="flex items-center gap-1">
            <span>{royalty}% royalty</span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 hover:text-red-400 cursor-pointer transition-colors">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Share2 className="w-4 h-4" />
            <span>{remixes} remixes</span>
          </div>
        </div>

        <button className="btn-secondary text-sm px-3 py-1">
          View Details
        </button>
      </div>
    </div>
  );
}
