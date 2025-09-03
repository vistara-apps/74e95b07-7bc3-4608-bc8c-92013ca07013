'use client';

import { useState } from 'react';
import { Shield, Clock, Hash, ExternalLink, X } from 'lucide-react';

interface TimestampProofProps {
  variant: 'inline' | 'modal';
  tokenId: string;
  timestamp: Date;
  zkProofHash: string;
  ipfsHash: string;
  transactionHash: string;
  onClose?: () => void;
}

export function TimestampProof({
  variant,
  tokenId,
  timestamp,
  zkProofHash,
  ipfsHash,
  transactionHash,
  onClose
}: TimestampProofProps) {
  const formatHash = (hash: string) => `${hash.slice(0, 8)}...${hash.slice(-6)}`;

  const ProofContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-500/20 rounded-xl">
          <Shield className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold">ZK Verification Proof</h3>
          <p className="text-gray-400">Token ID: #{tokenId}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Timestamp</span>
          </div>
          <p className="text-white font-mono text-sm">
            {timestamp.toISOString()}
          </p>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">ZK Proof Hash</span>
          </div>
          <p className="text-white font-mono text-sm">
            {formatHash(zkProofHash)}
          </p>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-gray-300">IPFS Hash</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white font-mono text-sm">
              {formatHash(ipfsHash)}
            </p>
            <button className="text-orange-400 hover:text-orange-300">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Transaction</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white font-mono text-sm">
              {formatHash(transactionHash)}
            </p>
            <button className="text-green-400 hover:text-green-300">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="glass-effect p-4 rounded-lg border border-green-500/20">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-green-400 mt-0.5" />
          <div>
            <h4 className="text-white font-medium mb-2">Verification Status</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              This idea has been cryptographically verified and timestamped using zero-knowledge proofs. 
              The content is stored immutably on IPFS and the proof is anchored on the Base blockchain.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Verified & Immutable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="glass-effect rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-semibold">Timestamp Proof</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <ProofContent />
        </div>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-xl p-4 border border-green-500/20">
      <ProofContent />
    </div>
  );
}
