import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Wallet } from 'lucide-react';
import WalletInfo from '../components/dapp/WalletInfo';
import TokenizationForm from '../components/dapp/TokenizationForm';
import MarketplaceListing from '../components/dapp/MarketplaceListing';
import ProjectTracker from '../components/dapp/ProjectTracker';
import { ConnectWalletProps } from '../types/dapp';

const DApp: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>('');

  const connectWallet = (): void => {
    // Simulating wallet connection
    setWalletAddress('0x9264962890abcdef1234567890afceef19362608');
    setIsWalletConnected(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {isWalletConnected && <WalletInfo address={walletAddress} />}
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {!isWalletConnected ? (
            <ConnectWallet onConnect={connectWallet} />
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TokenizationForm />
                <MarketplaceListing />
              </div>
              <ProjectTracker />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-xl text-center max-w-md w-full"
      >
        <Wallet className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
        <p className="text-gray-300 mb-8">
          Connect your wallet to start trading carbon credits on the GreenToken Hub
          platform.
        </p>
        <button
          onClick={onConnect}
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors"
        >
          Connect Wallet
        </button>
      </motion.div>
    </div>
  );
};

export default DApp;