import { Search, Filter, Users } from 'lucide-react';

interface GroupListProps {
    onGroupSelect: (group: Group) => void;
  }
  
  export default function GroupList({ onGroupSelect }: GroupListProps) {
    const groups: Group[] = [
      {
        id: '1',
        name: 'Evoke <> Skope',
        project: 'Demo',
        labels: ['High', 'Priority'],
        members: 3,
        lastActive: '03:17',
        isOnline: true
      },
      // Add more groups following the same structure
    ];
  
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
                className="w-full pl-8 pr-3 py-1 text-xs border rounded-md"
                />
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            </div>
            <button className="flex items-center gap-1 px-2 py-1 text-xs border rounded-md text-gray-600 hover:bg-gray-50">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter</span>
            </button>
            <div className="flex items-center gap-2 ml-auto">
                <button className="bg-green-600 text-white px-3 py-1 text-xs rounded-md hover:bg-green-700">
                Bulk message
                </button>
                <button className="text-gray-600 hover:bg-gray-50 px-3 py-1 text-xs rounded-md border">
                Group Actions
                </button>
            </div>
            </div>
            <div className="grid grid-cols-12 px-4 py-2 border-t text-sm text-gray-600">
                <div className="col-span-5">Group Name</div>
                <div className="col-span-2">Project</div>
                <div className="col-span-3">Labels</div>
                <div className="col-span-1 text-center">Members</div>
                <div className="col-span-1 text-right">Last Active</div>
            </div>
        </div>
  
        <div className="overflow-auto">
          {groups.map((group) => (
            <div
              key={group.id}
              onClick={() => onGroupSelect(group)}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b"
            >
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{group.name}</span>
                  {group.isOnline && (
                    <span className="ml-2 w-2 h-2 bg-green-500 rounded-full" />
                  )}
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span className={`mr-2 ${
                    group.project === 'Demo' ? 'text-blue-500' : 'text-orange-500'
                  }`}>
                    #{group.project}
                  </span>
                  {group.labels.map((label) => (
                    <span key={label} className="mr-2">
                      • {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div>{group.members}</div>
                <div className="text-sm text-gray-500">{group.lastActive}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}