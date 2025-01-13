'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import GroupList from '@/components/GroupList';
import GroupDetails from '@/components/GroupDetails';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <GroupList onGroupSelect={setSelectedGroup} />
      {selectedGroup && <GroupDetails group={selectedGroup} />}
    </div>
  );
}