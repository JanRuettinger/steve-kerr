import React from 'react';

export default function VaccinationRecords() {
    return (
        <div>
            <div className="text-xl font-semibold">Vaccination Records</div>

            <div className="font-semibold mt-6">2014</div>
            <div className="flex flex-col gap-2 mt-2">
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    Hepatitis A
                </div>
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    Hepatitis B
                </div>
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    Yellow Fever
                </div>
            </div>

            <div className="mt-6 font-semibold">2015</div>
            <div className="flex flex-col gap-2 mt-2">
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    Hepatitis A
                </div>
                <div className="rounded-md border-2 border-picton-blue-600 p-1 hover:bg-picton-blue-600 hover:text-white">
                    Hepatitis B
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

                <div className="ml-2">Upload new vaccination record</div>
            </button>
        </div>
    );
}
