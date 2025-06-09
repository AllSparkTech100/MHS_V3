import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


function AccountCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    //   const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const name = "Mental Health Plus and Saner Limited";
    const number = "3720039634";
    const bank = "Ecobank PLC";

    // eslint-disable-next-line no-unused-vars
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
        <>
            <div className="w-30 p-4 border border-gray-300 shadow-md rounded-xl">
                <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center justify-between w-full mb-3">

                    </div>
                    {/* {copied && <span className="text-green-500 text-sm mt-2">Copied!</span>} */}

                    <div className="flex items-center justify-between w-full p-0 mb-3">

                    </div>
                    {/* {copied && <span className="text-green-500 text-sm mt-2">Copied!</span>} */}


                    <div className="flex items-center justify-between w-full p-0 mb-3">

                    </div>
                    {/* {copied && <span className="text-green-500 text-sm mt-2">Copied!</span>} */}
                </div>


            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                        onClick={closeModal}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Bank Account Details
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            <p className="text-gray-600 mb-4">
                                <span className="text-lg font-medium ">{number}</span>
                                <button

                                    onClick={numberCopy}
                                    className="ml-2 text-gray-600 hover:text-gray-900"
                                >
                                    <FaRegCopy size={25} className="w-5 h-5" />
                                </button>
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="text-lg font-medium ">{name}</span>
                                <button
                                    onClick={nameCopy}
                                    className="ml-2 text-gray-600 hover:text-gray-900"
                                >
                                    <FaRegCopy size={25} className="w-5 h-5" />
                                </button>
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="text-lg font-medium ">{bank}</span>
                                <button
                                    onClick={bankCopy}
                                    className="ml-2 text-gray-600 hover:text-gray-900"
                                >
                                    <FaRegCopy size={25} className="w-5 h-5" />
                                </button>
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AccountCard;


{/* continue checking later */}