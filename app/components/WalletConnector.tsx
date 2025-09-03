'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Identity } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';

interface WalletConnectorProps {
  variant?: 'default';
}

export function WalletConnector({ variant = 'default' }: WalletConnectorProps) {
  const { isConnected, address } = useAccount();

  if (isConnected && address) {
    return (
      <Wallet>
        <Identity address={address} className="text-white">
          <Name address={address} />
        </Identity>
      </Wallet>
    );
  }

  return <ConnectWallet className="btn-primary" />;
}
