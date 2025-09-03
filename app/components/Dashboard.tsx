'use client';

import { useState } from 'react';
import { MetricCard } from './MetricCard';
import { CastInput } from './CastInput';
import { TokenCard } from './TokenCard';
import { TimestampProof } from './TimestampProof';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Wallet, Eye, Heart, Zap, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

// Mock data
const chartData = [
  { name: 'Jan', value: 12, revenue: 450 },
  { name: 'Feb', value: 19, revenue: 720 },
  { name: 'Mar', value: 25, revenue: 950 },
  { name: 'Apr', value: 31, revenue: 1200 },
  { name: 'May', value: 45, revenue: 1800 },
  { name: 'Jun', value: 52, revenue: 2100 },
];

const mockTokens = [
  {
    id: '1',
    title: 'AI-Powered Climate Solutions',
    content: 'Revolutionary idea for using machine learning to predict and prevent climate disasters through real-time environmental data analysis...',
    timestamp: new Date(Date.now() - 86400000 * 2),
    royalty: 7.5,
    views: 1247,
    likes: 89,
    remixes: 12,
    author: 'climate.eth',
    zkVerified: true,
  },
  {
    id: '2',
    title: 'Decentralized Social Music Platform',
    content: 'A blockchain-based music sharing platform where artists directly connect with fans and earn royalties from every stream...',
    timestamp: new Date(Date.now() - 86400000 * 5),
    royalty: 10,
    views: 892,
    likes: 67,
    remixes: 8,
    author: 'musicdao.base',
    zkVerified: true,
  },
];

export function Dashboard() {
  const [showProofModal, setShowProofModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  const handleMintIdea = (content: string, royalty: number) => {
    console.log('Minting idea:', { content, royalty });
    // Here you would integrate with the actual minting API
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="gradient-text text-4xl font-bold mb-4">
          OriginStamp Dashboard
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Prove your ideas, own your content's future. Create ZK-verified timestamps for your innovations.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Ideas"
          value="42"
          change="+12%"
          trend="up"
          icon={Zap}
          color="purple"
        />
        <MetricCard
          title="Revenue Earned"
          value="$1,247"
          change="+23%"
          trend="up"
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Total Views"
          value="12.4K"
          change="+8%"
          trend="up"
          icon={Eye}
          color="blue"
        />
        <MetricCard
          title="Active Remixes"
          value="28"
          change="+5%"
          trend="up"
          icon={Users}
          color="orange"
        />
      </div>

      {/* Chart Section */}
      <div className="glass-effect rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold">Ideas & Revenue Growth</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-purple-300 text-sm">Ideas</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-300 text-sm">Revenue</span>
            </div>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#a855f7" 
                strokeWidth={3}
                dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Create New Idea Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CastInput variant="withTimestamp" onSubmit={handleMintIdea} />
        </div>
        
        <div className="space-y-4">
          <div className="glass-effect rounded-xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-4">ZK Verification Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">ZK Verified Ideas</span>
                <span className="text-green-400 font-semibold">100%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-gray-400">
                All your ideas are protected with zero-knowledge proofs
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Idea #42 minted</span>
                <span className="text-xs text-gray-400 ml-auto">2h ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Remix earned royalty</span>
                <span className="text-xs text-gray-400 ml-auto">5h ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-300">New follower</span>
                <span className="text-xs text-gray-400 ml-auto">1d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Ideas */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">Your Recent Ideas</h2>
          <button className="btn-secondary">View All</button>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {mockTokens.map((token) => (
            <TokenCard
              key={token.id}
              variant="original"
              {...token}
            />
          ))}
        </div>
      </div>

      {/* Proof Modal */}
      {showProofModal && selectedToken && (
        <TimestampProof
          variant="modal"
          tokenId={selectedToken}
          timestamp={new Date()}
          zkProofHash="0x1234567890abcdef1234567890abcdef12345678"
          ipfsHash="QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o"
          transactionHash="0xabcdef1234567890abcdef1234567890abcdef12"
          onClose={() => {
            setShowProofModal(false);
            setSelectedToken(null);
          }}
        />
      )}
    </div>
  );
}
