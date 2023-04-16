import * as React from 'react';
import clsxm from '../components/lib/clsxm';

type TopNavBarTab = {
    name: string;
    href: string;
    implemented: boolean;
};

type Props = {
    navBarTabs: TopNavBarTab[];
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function TopNavBar({
    navBarTabs,
    activeTab,
    setActiveTab,
}: Props) {
    return (
        <div className="z-20 sticky top-14 bg-white pt-4 border-b-2 border-gray-200">
            <div className=" bg-white">
                <div className="sm:hidden">
                    <label htmlFor="current-tab" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        id="current-tab"
                        name="current-tab"
                        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-picton-blue-500 focus:outline-none focus:ring-picton-blue-500 sm:text-sm"
                    >
                        {navBarTabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                        {navBarTabs.map((tab, index) => {
                            if (tab.implemented == true) {
                                return (
                                    <a
                                        key={tab.name}
                                        href={tab.href}
                                        onClick={() => setActiveTab(index)}
                                        className={clsxm(
                                            index == activeTab
                                                ? 'border-picton-blue-500 text-picton-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                            'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                                        )}
                                        aria-current={
                                            index == activeTab
                                                ? 'page'
                                                : undefined
                                        }
                                    >
                                        {tab.name}
                                    </a>
                                );
                            } else {
                                return (
                                    <div className="group">
                                        <a
                                            key={tab.name}
                                            href={tab.href}
                                            className="border-transparent text-gray-500 inline-block group-hover:hidden whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                                        >
                                            {tab.name}
                                        </a>
                                        <a
                                            key={tab.name}
                                            href={tab.href}
                                            className="border-transparent text-gray-500 hidden bg-yellow-500 rounded-md group-hover:inline-block whitespace-nowrap px-1 border-b-2 font-medium text-sm"
                                        >
                                            coming soon!
                                        </a>
                                    </div>
                                );
                            }
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
