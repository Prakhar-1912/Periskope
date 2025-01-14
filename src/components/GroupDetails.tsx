import React from 'react';
import { RefreshCw } from 'lucide-react';

export function GroupDetails({ group }: GroupDetailsProps) {
  if (!group) return null;

  return (
    <div className="w-80 border-l">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm">{group.group_name}</h3>
          <button className="text-gray-600 hover:text-gray-800 text-sm flex items-center gap-1">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex space-x-4 mb-4">
          <button className="text-gray-600 hover:text-gray-800 text-sm">Overview</button>
          <button className="text-gray-600 hover:text-gray-800 text-sm">Members</button>
          <button className="text-gray-600 hover:text-gray-800 text-sm">Logs</button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Last Active</span>
            <span>{group.last_active}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Disappearing Messages</span>
            <span>OFF</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Send Message Permission</span>
            <span>All</span>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-medium mb-2 text-sm">Project</h4>
          <span className={`text-sm ${
            group.project === 'Demo' ? 'text-blue-500' : 'text-orange-500'
          }`}>
            #{group.project}
          </span>
        </div>

        <div className="mt-8">
          <h4 className="font-medium mb-2 text-sm">Labels</h4>
          <div className="space-y-2">
              {group.lables?.map((label, index) => (
                  <span key={index} className="text-sm text-gray-600">
                    • {label}
                  </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
