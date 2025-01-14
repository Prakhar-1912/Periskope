import React, { useState } from 'react';
import { GroupList } from './GroupList';
import { GroupDetails } from './GroupDetails';

export default function GroupManagement() {
    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  
    const handleGroupSelect = (group: Group) => {
      setSelectedGroup(selectedGroup?.id === group.id ? null : group);
    };
  
    return (
      <div className="flex h-full">
        <GroupList 
          onGroupSelect={handleGroupSelect}
          selectedGroup={selectedGroup}
        />
       {selectedGroup && (
        <div className="hidden md:block w-full">
          <GroupDetails group={selectedGroup} />
        </div>
      )}
      </div>
    );
}