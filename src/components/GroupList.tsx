import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { supabase } from '../../supabaseClient';
import { 
  getLabelColors, 
  formatDate,
  getProjectBadgeStyle 
} from '../utils/grouputils';

const formatLabel = (label: string) => {
  const words = label.trim().split(/\s+/);
  if (words.length === 1) {
    return label;
  }
  return `${label.slice(0, 4)}..`;
};

export function GroupList({ onGroupSelect, selectedGroup }: GroupListProps) {
  const [selectedGroups, setSelectedGroups] = useState<Set<string>>(new Set());
  const [groups, setGroups] = useState<Group[]>([]);
  const [expandedLabels, setExpandedLabels] = useState<Set<string>>(new Set());
  

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from('group_details')
          .select('*');

        if (error) {
          console.error('Error fetching groups:', error.message);
        } else if (data) {
          setGroups(data);
        }
      } catch (err) {
        console.error('Unexpected error fetching groups:', err);
      }
    };

    fetchGroups();
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, groupId: string) => {
    e.stopPropagation();
    const newSelected = new Set(selectedGroups);
    if (newSelected.has(groupId)) {
      newSelected.delete(groupId);
    } else {
      newSelected.add(groupId);
    }
    setSelectedGroups(newSelected);
  };

  const toggleLabels = (groupId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newExpanded = new Set(expandedLabels);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedLabels(newExpanded);
  };

  const renderLabels = (group: Group) => {
    if (!group.lables?.length) return null;

    const isExpanded = expandedLabels.has(group.id);
    const labels = group.lables;
    const displayLabels = isExpanded ? labels : labels.slice(0, 2);
    const hasMore = labels.length > 2;

    return (
      <div className="flex items-center gap-1 overflow-hidden">
        {displayLabels.map((label: string, index: number) => {
          const colors = getLabelColors(label);
          return (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs"
              style={{
                backgroundColor: colors.background,
                color: colors.text
              }}
            >
              <span 
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: colors.text }}
              />
              {formatLabel(label)}
            </span>
          );
        })}
        {hasMore && !isExpanded && (
          <button
            onClick={(e) => toggleLabels(group.id, e)}
            className="text-xs text-gray-500 hover:text-gray-700 ml-1"
          >
            +{labels.length - 2}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 border-r">
      <div className="overflow-x-auto">
        <div className="min-w-[768px]">
          <div className="grid grid-cols-12 px-4 py-2 border-b text-sm text-gray-600 bg-gray-50">
            <div className="col-span-5">Group Name</div>
            <div className="col-span-2">Project</div>
            <div className="col-span-3">Labels</div>
            <div className="col-span-1 text-center">Members</div>
            <div className="col-span-1 text-right">Last Active</div>
          </div>

          <div className="overflow-x-auto">
            <div className="divide-y">
              {groups.map((group) => (
                <div
                  key={group.id}
                  onClick={() => onGroupSelect(group)}
                  className={`grid grid-cols-12 px-4 py-3 hover:bg-gray-50 cursor-pointer items-center ${
                    selectedGroup?.id === group.id ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedGroups.has(group.id)}
                      onChange={(e) => handleCheckboxChange(e, group.id)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-black">{group.group_name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex px-2 py-0.5 rounded-md text-sm ${getProjectBadgeStyle(group.project)}`}>
                      # {group.project}
                    </span>
                  </div>
                  <div className="col-span-3">
                    {renderLabels(group)}
                  </div>
                  <div className="col-span-1 text-center text-sm text-black">
                    {group.members}
                  </div>
                  <div className="col-span-1 text-right text-sm text-gray-500">
                    {formatDate(group.last_active, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupList;