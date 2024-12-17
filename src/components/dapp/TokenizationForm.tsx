import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from 'lucide-react';
import { FormData } from '../../types/dapp';

const TokenizationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    creditAmount: '',
    verificationDoc: null,
    description: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Placeholder for HTS token creation
    console.log('Creating carbon credit token:', formData);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, verificationDoc: e.target.files[0] });
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6">Tokenize Carbon Credits</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Project Name</label>
          <input
            type="text"
            value={formData.projectName}
            onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-400"
            placeholder="Sustainable Forest Initiative"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Credit Amount</label>
          <input
            type="number"
            value={formData.creditAmount}
            onChange={(e) => setFormData({ ...formData, creditAmount: e.target.value })}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-400"
            placeholder="1000"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Verification Document</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Project Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-400"
            rows={4}
            placeholder="Describe your environmental project..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <PlusCircle size={20} />
          <span>Create Token</span>
        </button>
      </form>
    </div>
  );
};

export default TokenizationForm;