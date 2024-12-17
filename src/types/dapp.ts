import { LucideIcon } from 'lucide-react';

export interface FormData {
  projectName: string;
  creditAmount: string;
  verificationDoc: File | null;
  description: string;
}

export interface Listing {
  id: number;
  projectName: string;
  price: number;
  available: number;
  location: string;
  verificationStatus: 'Verified' | 'Pending';
  rating: number;
}

export interface ProjectImpact {
  co2Offset?: number;
  treesPlanted?: number;
  areaProtected?: number;
  energyGenerated?: number;
  homesSupplied?: number;
}

export interface Project {
  id: number;
  name: string;
  type: string;
  creditsIssued: number;
  creditsAvailable: number;
  impact: ProjectImpact;
  status: 'Active' | 'Pending' | 'Completed';
  icon: LucideIcon;
}

export interface ConnectWalletProps {
  onConnect: () => void;
}

export interface WalletInfoProps {
  address: string;
}