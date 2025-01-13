interface Group {
    id: string;
    name: string;
    project: 'Demo' | 'Clients';
    labels: string[];
    members: number;
    lastActive: string;
    isOnline?: boolean;
    icon?: string;
}