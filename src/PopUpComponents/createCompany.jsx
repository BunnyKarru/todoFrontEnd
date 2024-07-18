import React, { useState } from 'react';

const CreateCompany = ({ onClose, onAddCompany }) => {
  const [companyName, setCompanyName] = useState('');

  const handleAddCompany = () => {
    if (companyName) {
      onAddCompany({ name: companyName });
      onClose();
    }
  };

  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black">Add Company</h2>
        <label htmlFor="companyName" className="block text-black mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          className="w-full p-2 mb-4 border border-black rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded w-full"
          onClick={handleAddCompany}
        >
          Add Company
        </button>
      </div>
    </div>
  );
};

export default CreateCompany;
