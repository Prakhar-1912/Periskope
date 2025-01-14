import { Search, Filter, Users, RefreshCw, FileText, Bell } from 'lucide-react';

const GroupHeader = () => {
    return (
        <div className="border rounded-lg bg-white">
            <div className="flex items-center justify-between mx-4 my-2">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm text-gray-600">groups</h2>
                    <Users className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 border rounded-md">
                        <FileText className="w-4 h-4 m-1" />
                        <span className="text-sm m-1">Docs</span>
                    </button>
                    <div className="flex items-center gap-2 text-gray-600 rounded-md border">
                        <span className="text-sm m-1">+91 90043 89372</span>
                    </div>
                    <button className="relative text-gray-600 hover:text-gray-800">
                        <Bell className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-md border"></span>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-2 border-t p-2 mx-2">
                <div className="relative flex-grow max-w-xs">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-8 pr-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <button className="flex items-center gap-1 px-2.5 py-1.5 text-sm border rounded-md text-gray-600 hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                </button>
                <div className="flex items-center gap-2 ml-auto">
                    <button className="bg-green-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-green-700">
                        Bulk message
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:bg-gray-50 px-3 py-1.5 text-sm rounded-md border">
                        <span>Group Actions</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GroupHeader;