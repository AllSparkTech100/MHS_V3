import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";


function AccountCard() {
    const name = "Mental Health Plus and Saner Limited";
    const number = "3720039634";
    const bank = "Ecobank PLC";
    const [copied, setCopied] = useState(false);

    const numberCopy = () => {
        navigator.clipboard.writeText(number);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    const nameCopy = () => {
        navigator.clipboard.writeText(name);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    const bankCopy = () => {
        navigator.clipboard.writeText(bank);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="w-full p-4 border h-60 border-gray-300 shadow-md rounded-xl bg-white text-black">
            <h2 className="text-xl font-semibold text-center mb-4">Bank Account Details</h2>
            <div className="my-3 flex items-center justify-between">
                <span className="font-medium text-blue-500">Account Number:</span>
                <span className="text-lg font-bold">{number}</span>
                <button onClick={numberCopy} className="ml-2 text-gray-600 hover:text-gray-900">
                    <FaRegCopy size={20} />
                </button>
            </div>
            <div className="my-3 flex items-center justify-between">
                <span className="font-medium text-blue-500">Account Name:</span>
                <span className="text-lg font-bold">{name}</span>
                <button onClick={nameCopy} className="ml-2 text-gray-600 hover:text-gray-900">
                    <FaRegCopy size={20} />
                </button>
            </div>
            <div className="my-3 flex items-center justify-between">
                <span className="font-medium text-blue-500">Bank:</span>
                <span className="text-lg font-bold">{bank}</span>
                <button onClick={bankCopy} className="ml-2 text-gray-600 hover:text-gray-900">
                    <FaRegCopy size={20} />
                </button>
            </div>
            {copied && <div className="text-green-600 text-center mt-2">Copied!</div>}
        </div>
    );
}

export default AccountCard;