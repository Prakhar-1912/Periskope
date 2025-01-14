import React from 'react';
import { RefreshCw, ChevronDown } from 'lucide-react';
import { 
  getLabelColors, 
  formatDate,
  getProjectBadgeStyle 
} from '../utils/grouputils';

export function GroupDetails({ group }: GroupDetailsProps) {
  if (!group) return null;

  return (
    <div className="w-80 border-l border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-gray-900 text-sm font-medium">{group.group_name.charAt(0)}</span>
            </div>
            <h3 className="font-medium text-sm text-gray-900">{group.group_name}</h3>
          </div>
          <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
            <RefreshCw className="w-3.5 h-3.5" />
            Refresh
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex px-4">
          <div className="py-4 px-2 border-b-2 border-green-500 text-sm font-medium text-gray-900">Overview</div>
          <div className="py-4 px-2 text-sm text-gray-500">Members</div>
          <div className="py-4 px-2 text-sm text-gray-500">Logs</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Last Active</span>
            <span className="text-gray-600">{formatDate(group.last_active)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Disappearing Messages</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">OFF</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Send Message Permission</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">All</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Project */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm text-gray-600">Project</h4>
            <span className={`text-sm px-2 py-0.5 rounded ${getProjectBadgeStyle(group.project)}`}>
              # {group.project}
            </span>
          </div>
        </div>

        {/* Labels */}
        <div className="mt-8 pb-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm text-gray-600">Labels</h4>
            <div className="flex flex-col items-end gap-1.5">
              {group.lables?.map((label: string, index: number) => {
                const colors = getLabelColors(label);
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-2 py-0.5 rounded border`}
                    style={{
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.background,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.text }}
                    />
                    <span className="text-sm">{label}</span>
                  </div>
                );
              })}
              <button className="text-sm text-gray-400 hover:text-gray-600 mt-1 border border-gray-200 rounded px-2 py-0.5">
                + Add Label
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2">
          <button className="w-full text-sm text-gray-600 hover:text-gray-800 py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-50">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Export Chat
          </button>
          <button className="w-full text-sm text-red-600 hover:text-red-700 py-2 px-3 rounded flex items-center gap-2 hover:bg-red-50">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Exit Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupDetails;