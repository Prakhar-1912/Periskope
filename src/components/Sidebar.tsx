// app/components/Sidebar.tsx
'use client';

import Image from 'next/image';
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Contact,
  ClipboardList,
  FolderClosed,
  Settings,
  HelpCircle
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: MessageSquare, label: 'Chats' },
    { icon: Users, label: 'Groups' },
    { icon: Contact, label: 'Contacts' },
    { icon: ClipboardList, label: 'Logs' },
    { icon: FolderClosed, label: 'Files' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-16 md:w-60 bg-white border-r flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 flex items-center space-x-3">
        <div className="h-8 w-8 flex-shrink-0 relative">
          <Image 
            src="/logo.png" 
            alt="Periskope"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden md:block">
          <p className="text-base font-medium text-gray-900">Periskope</p>
          <p className="text-xs text-gray-500">bharat@hashlabs.dev</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center px-4 py-2.5 hover:bg-gray-50 cursor-pointer
              ${item.label === 'Groups' ? 'bg-gray-50' : ''}`}
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span className="hidden md:block ml-3 text-sm text-gray-600">
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Help & Support */}
      <div className="border-t">
        <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
          <HelpCircle className="w-5 h-5 text-green-600" />
          <span className="hidden md:block ml-3 text-sm text-gray-600">
            Help & Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;