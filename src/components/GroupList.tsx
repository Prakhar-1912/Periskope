  import React, { useState, useEffect } from 'react';
  import { Search, Filter, Users, RefreshCw } from 'lucide-react';
  import {supabase} from '../../supabaseClient';

  export function GroupList({ onGroupSelect, selectedGroup }: GroupListProps) {
    const [selectedGroups, setSelectedGroups] = useState<Set<string>>(new Set());
    const [groups, setGroups] = useState<Group[]>([]);

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

    console.log(groups)

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

    return (
      <div className="flex-1 border-r">
        <div className="border-b">
          <div className="flex items-center justify-between mx-4 my-2">
            <div className="flex items-center gap-2">
              <h2 className="text-sm text-gray-600">groups</h2>
              <Users className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 border-t p-1">
            <div className="relative w-48">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1 text-sm border rounded-md"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="flex items-center gap-1 px-2 py-1 text-sm border rounded-md text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <button className="bg-green-600 text-white px-3 py-1 text-sm rounded-md hover:bg-green-700">
                Bulk message
              </button>
              <button className="text-gray-600 hover:bg-gray-50 px-3 py-1 text-sm rounded-md border">
                Group Actions
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="grid grid-cols-12 px-4 py-2 border-b text-sm text-gray-600 bg-gray-50">
              <div className="col-span-5">Group Name</div>
              <div className="col-span-2">Project</div>
              <div className="col-span-3">Labels</div>
              <div className="col-span-1 text-center">Members</div>
              <div className="col-span-1 text-right">Last Active</div>
            </div>

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
                    <span className="text-xl">{group.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-black">{group.group_name}</span>
                        {group.isOnline && (
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className={`text-sm ${
                      group.project === 'Demo' ? 'text-blue-500' : 'text-orange-500'
                    }`}>
                      #{group.project}
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center gap-2">
                    {group.lables?.map((label, index) => (
                      <span key={index} className="text-sm text-gray-600">
                        • {label}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-1 text-center text-sm text-black">{group.members}</div>
                  <div className="col-span-1 text-right text-sm text-gray-500">
                    {group.last_active}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }