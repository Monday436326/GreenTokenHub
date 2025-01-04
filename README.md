# GreenTokenHub
GreenToken Hub is a platform for tokenizing carbon credits and enabling seamless trading within a transparent and accountable ecosystem. Utilizing the Hedera Token Service (HTS), the platform creates eco-tokens that represent emissions reductions or contributions to renewable energy projects.

BSC Testnet Deployment: https://testnet.bscscan.com/address/0x04CA166F3E38EE18deD480BaA6Bb3fC9c98a59c6

Hedera Testnet Deployment: https://hashscan.io/testnet/contract/0.0.5340859


GreenTokenHub is a decentralized platform for tokenizing and trading carbon credits across multiple blockchain networks. The platform enables environmental projects to create verifiable carbon credit tokens and facilitates a marketplace for trading these credits.

## Features

- **Multi-Chain Support**: Deploy and trade carbon credits on both BSC Testnet and Hedera Testnet
- **Carbon Credit Tokenization**: Create ERC1155 tokens representing verified carbon credits
- **Marketplace**: Buy and sell carbon credits with real-time pricing
- **Project Tracking**: Monitor environmental impact and credit distribution
- **Verification System**: Upload and verify project documentation via IPFS
- **WalletConnect Integration**: Seamless wallet connection across different networks

## Technology Stack

- Frontend: React with TypeScript
- Styling: Tailwind CSS
- Smart Contracts: Solidity
- Development Framework: Hardhat
- Networks: BSC Testnet, Hedera Testnet
- File Storage: IPFS/Pinata
- Libraries:
  - ethers.js v6
  - @walletconnect/web3wallet
  - @hashgraph/sdk
  - framer-motion

## Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn
- MetaMask, HashPack or any WalletConnect compatible wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Monday436326/greentokenhub.git
cd greentokenhub
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```env
VITE_BSC_TESTNET_CONTRACT=your_bsc_testnet_contract_address
VITE_HEDERA_TESTNET_CONTRACT=your_hedera_testnet_contract_address
VITE_PINATA_API_KEY=your_pinata_api_key
VITE_PINATA_SECRET_KEY=your_pinata_secret_key
```

4. Start the development server:
```bash
npm run dev
```

## Core Components

### Smart Contracts

- `CarbonCreditToken.sol`: ERC1155 implementation for carbon credits
- Handles project creation, credit minting, and trading

### Frontend Features

- Carbon credit tokenization form
- Real-time marketplace with filtering
- Project impact tracking
- Multi-network wallet connection
- Transaction history


## Network Configuration

### BSC Testnet
- Network Name: BSC Testnet
- RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545
- Chain ID: 97
- Currency Symbol: tBNB

### Hedera Testnet
- Network Name: Hedera Testnet
- RPC URL: https://testnet.hashio.io/api
- Chain ID: 296
- Currency Symbol: HBAR


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenZeppelin for smart contract libraries
- Hedera and BSC for network infrastructure
- WalletConnect for wallet integration
- IPFS/Pinata for decentralized storage