'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { GroupList } from '@/components/GroupList';
import { GroupDetails } from '@/components/GroupDetails';
import Groupheader from '@/components/GroupHeader';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <div className="flex-none">
          <Groupheader />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <GroupList onGroupSelect={setSelectedGroup} selectedGroup={selectedGroup} />
          </div>

          {selectedGroup && (
            <div className="w-full md:w-80 border-l overflow-y-auto">
              <GroupDetails group={selectedGroup} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
