interface Group {
    id: string;
    group_name: string;
    project: string;
    lables: string[];
    members: number;
    last_active: string;
    isOnline: boolean;
    icon: string;
}
  
interface GroupListProps {
    onGroupSelect: (group: Group) => void;
    selectedGroup: Group | null;
}
  
interface GroupDetailsProps {
    group: Group | null;
}