interface GroupDetailsProps {
    group: Group;
  }
  
  export default function GroupDetails({ group }: GroupDetailsProps) {
    return (
      <div className="w-80 border-l hidden lg:block">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{group.name}</h3>
            <button className="text-gray-400 hover:text-gray-600">Refresh</button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex space-x-4 mb-4">
            <button className="text-gray-600 hover:text-gray-800">Overview</button>
            <button className="text-gray-600 hover:text-gray-800">Members</button>
            <button className="text-gray-600 hover:text-gray-800">Logs</button>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Active</span>
              <span>{group.lastActive}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Disappearing Messages</span>
              <span>OFF</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Send Message Permission</span>
              <span>All</span>
            </div>
          </div>
  
          <div className="mt-8">
            <h4 className="font-medium mb-2">Project</h4>
            <span className={`${
              group.project === 'Demo' ? 'text-blue-500' : 'text-orange-500'
            }`}>
              #{group.project}
            </span>
          </div>
  
          <div className="mt-8">
            <h4 className="font-medium mb-2">Labels</h4>
            <div className="space-y-2">
              {group.labels.map((label) => (
                <div key={label} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }