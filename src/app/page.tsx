'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import {GroupList} from '@/components/GroupList';
import {GroupDetails} from '@/components/GroupDetails';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      {/* Container for Group List and Group Details */}
      <div className="flex flex-1 overflow-hidden">
        {/* Group List Container: Fixed height with scrolling */}
        <div className="flex-1 overflow-y-auto">
          <GroupList onGroupSelect={setSelectedGroup} selectedGroup={selectedGroup} />
        </div>
        
        {/* Group Details Container: Only visible if a group is selected */}
        {selectedGroup && (
          <div className="w-80 border-l overflow-y-auto">
            <GroupDetails group={selectedGroup} />
          </div>
        )}
      </div>
    </div>
  );
}