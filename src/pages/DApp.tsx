import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Wallet } from 'lucide-react';
import WalletInfo from '../components/dapp/WalletInfo';
import TokenizationForm from '../components/dapp/TokenizationForm';
import MarketplaceListing from '../components/dapp/MarketplaceListing';
import ProjectTracker from '../components/dapp/ProjectTracker';
import { ConnectWalletProps } from '../types/dapp';
import { DAppConnector, HederaSessionEvent, HederaJsonRpcMethod, HederaChainId } from '@hashgraph/hedera-wallet-connect';
import { LedgerId } from '@hashgraph/sdk';
import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';

const DApp: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [connector, setConnector] = useState<DAppConnector | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  
  useEffect(() => {
    const init = async () => {
      try {
        const projectId = '0a4f8da85fc03a4b02efcbf34fb6b818';
        if (!projectId) {
          throw new Error('WalletConnect project ID not found');
        }

        const core = new Core({
          projectId,
          relayUrl: 'wss://relay.walletconnect.org',
        });

        await Web3Wallet.init({
          core,
          metadata: {
            name: "GreenTokenHub",
            description: "Dapp",
            url: window.location.origin,
            icons: ["https://your-icon-url.com/icon.png"]
          }
        });

        const dAppConnector = new DAppConnector(
          {
            name: "GreenTokenHub",
            description: "DApp",
            url: window.location.origin,
            icons: ["https://your-icon-url.com/icon.png"]
          },
          LedgerId.TESTNET,
          projectId, 
          Object.values(HederaJsonRpcMethod),
          [HederaSessionEvent.ChainChanged, HederaSessionEvent.AccountsChanged],
          [HederaChainId.Testnet],
          { relayUrl: 'wss://relay.walletconnect.org' }
        );

        await dAppConnector.init();
        setConnector(dAppConnector);
        setConnectionError(null);

        // Check for existing sessions
        const existingSessions = dAppConnector.walletConnectClient?.session.getAll() || [];
        if (existingSessions.length > 0) {
          const lastSession = existingSessions[existingSessions.length - 1];
          const accountId = lastSession.namespaces.hedera?.accounts[0].split(':')[2];
          if (accountId) {
            setWalletAddress(accountId);
            setIsWalletConnected(true);
          }
        }

      } catch (error) {
        console.error('Error initializing DAppConnector:', error);
        setConnectionError(error instanceof Error ? error.message : 'Failed to initialize wallet connection');
      }
    };

    init();

    return () => {
      if (connector) {
        connector.disconnectAll();
      }
    };
  }, []);


  const connectWallet = async () => {
    if (!connector) {
      setConnectionError('Wallet connector not initialized');
      return;
    }

    try {
      const session = await connector.openModal();
      if (!session.namespaces.hedera?.accounts?.[0]) {
        throw new Error('No Hedera account found in session');
      }
      const accountId = session.namespaces.hedera.accounts[0].split(':')[2];
      setWalletAddress(accountId);
      setIsWalletConnected(true);
      setConnectionError(null);
    } catch (error) {
      console.error('Wallet connection failed:', error);
      setConnectionError(error instanceof Error ? error.message : 'Failed to connect wallet');
    }
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