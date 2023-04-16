import React from 'react';

export default function BloodTests() {
    return (
        <div>
            <div className="text-xl font-semibold">Past blood tests:</div>
            <div className="flex flex-col gap-2 mt-2">
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    06/12/2022
                </div>
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    08/12/2022
                </div>
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    10/12/2022
                </div>
            </div>

            <button className="rounded-md border-2 border-gray-600 p-1 mt-8 flex flex-row hover:bg-gray-700 hover:text-white">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <div className="ml-2">Upload new blood test</div>
            </button>
        </div>
    );
}
