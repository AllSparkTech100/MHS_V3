import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";


function AccountCard() {
    const name = "Mental Health Plus and Saner Limited";
    const number = "3720039634";
    const bank = "Ecobank PLC";

    const [copied, setCopied] = useState(false);

    const numberCopy = () => {
        navigator.clipboard.writeText(name, number, bank);
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
        <div className=" absolute container w-42 p-4 m-0 mx-auto flex flex-col items-center justify-between border border-gray-300 shadow-md rounded-xl">
            <div className="flex flex-col">
                <div className="flex items-center justify-between w-full p-0 mb-3">
                    <span className="text-lg font-medium">{number}</span>
                    <button

                        onClick={numberCopy}
                        className="ml-2 text-gray-600 hover:text-gray-900"
                    >
                        <FaRegCopy size={25} className="w-5 h-5" />
                    </button>
                </div>
                {copied && <span className="text-green-500 text-sm mt-2">Copied!</span>}

                <div className="flex items-center justify-between w-full p-0 mb-3">
                    <span className="text-lg font-medium">{name}</span>
                    <button
                        onClick={nameCopy}
                        className="ml-2 text-gray-600 hover:text-gray-900"
                    >
                        <FaRegCopy size={25} className="w-5 h-5" />
                    </button>
                </div>
                {copied && <span className="text-green-500 text-sm mt-2">Copied!</span>}


                <div className="flex items-center justify-between w-full p-0 mb-3">
                    <span className="text-lg font-medium">{bank}</span>
                    <button
                        onClick={bankCopy}
                        className="ml-2 text-gray-600 hover:text-gray-900"
                    >
                        <FaRegCopy size={25} className="w-5 h-5" />
                    </button>
                </div>
                {copied && <span className="text-green-500 text-sm mt-2">Copied!</span>}
            </div>
        </div>
    );
}

export default AccountCard;