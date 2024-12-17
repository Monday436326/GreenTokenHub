import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { Listing } from '../../types/dapp';

const mockListings: Listing[] = [
  {
    id: 1,
    projectName: 'Amazon Rainforest Conservation',
    price: 25,
    available: 5000,
    location: 'Brazil',
    verificationStatus: 'Verified',
    rating: 4.8,
  },
  {
    id: 2,
    projectName: 'Solar Farm Initiative',
    price: 18,
    available: 3000,
    location: 'India',
    verificationStatus: 'Verified',
    rating: 4.5,
  },
  {
    id: 3,
    projectName: 'Wind Energy Project',
    price: 22,
    available: 2500,
    location: 'Germany',
    verificationStatus: 'Pending',
    rating: 4.2,
  },
];

const MarketplaceListing: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6">Carbon Credit Marketplace</h3>
      <div className="space-y-4">
        {mockListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-gray-700 p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <h4 className="text-white font-semibold">{listing.projectName}</h4>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-gray-400 text-sm">
                  ${listing.price} per credit
                </span>
                <span className="text-gray-400 text-sm">
                  {listing.available.toLocaleString()} available
                </span>
                <span className={`text-sm ${
                  listing.verificationStatus === 'Verified'
                    ? 'text-green-400'
                    : 'text-yellow-400'
                }`}>
                  {listing.verificationStatus}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="View Details"
              >
                <Info size={20} />
              </button>
              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center space-x-2 transition-colors">
                <ShoppingCart size={20} />
                <span>Buy</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceListing;