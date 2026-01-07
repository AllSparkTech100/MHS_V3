import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

function AccountCard() {
 
  const [copiedItem, setCopiedItem] = useState(null);

  const accountDetails = [
    { label: "Account Number", value: "3720039634" },
    { label: "Account Name", value: "Mental Health Plus and Saner Limited" },
    { label: "Bank Name", value: "Ecobank PLC" },
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(label);
      // Reset the state after 2 seconds
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  return (
    <div className="w-full p-4 border border-gray-300 shadow-md rounded-xl bg-white text-black">
      <h2 className="text-xl font-semibold text-center mb-6">
        Bank Account Details
      </h2>

      <div className="flex flex-col gap-4">
        {accountDetails.map((detail, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <span className="font-medium text-blue-500 whitespace-nowrap">
              {detail.label}:
            </span>
            
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-md font-bold text-gray-800 text-right">
                {detail.value}
              </span>
              
              <button
                onClick={() => handleCopy(detail.value, detail.label)}
                className="text-gray-600 hover:text-blue-600 transition-colors p-1"
                title={`Copy ${detail.label}`}
              >
                {copiedItem === detail.label ? (
                  <FaCheck size={18} className="text-green-500" />
                ) : (
                  <FaRegCopy size={18} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Success Alert */}
      <div className={`mt-6 text-center text-sm font-medium transition-opacity duration-300 ${copiedItem ? 'opacity-100' : 'opacity-0'}`}>
        {copiedItem ? (
            <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {copiedItem} copied successfully!
            </span>
        ) : (
            <span className="invisible">Placeholder</span>
        )}
      </div>
    </div>
  );
}

export default AccountCard;