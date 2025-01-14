// utils/groupUtils.ts

export type LabelColorConfig = {
    background: string;
    text: string;
    dot: string;
  };
  
  // Label color configurations
  export const LABEL_COLORS: { [key: string]: LabelColorConfig } = {
    'High Value': {
      background: '#f3e8ff',
      text: '#9333ea',
      dot: 'bg-purple-500'
    },
    'Priority': {
      background: '#ccfbf1',
      text: '#0d9488',
      dot: 'bg-emerald-500'
    },
    'Warm': {
      background: '#fee2e2',
      text: '#dc2626',
      dot: 'bg-red-500'
    },
    'Pilot': {
      background: '#fae8ff',
      text: '#c026d3',
      dot: 'bg-pink-500'
    },
    'Pro': {
      background: '#bae6fd',
      text: '#0284c7',
      dot: 'bg-blue-500'
    }
  };
  
  // Default colors for unknown labels
  export const DEFAULT_LABEL_COLORS: LabelColorConfig = {
    background: '#f3f4f6',
    text: '#374151',
    dot: 'bg-gray-500'
  };
  
  export const getLabelColors = (label: string): LabelColorConfig => {
    return LABEL_COLORS[label] || DEFAULT_LABEL_COLORS;
  };
  
  export const formatLabel = (label: string, truncate: boolean = false): string => {
    return truncate ? `${label.substring(0, 3)}..` : label;
  };
  
  export const formatDate = (dateStr: string, includeRelative: boolean = false): string => {
    const date = new Date(dateStr);
    
    if (includeRelative) {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (date.toDateString() === today.toDateString()) {
        return 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
      }
    }
    
    return date.toLocaleDateString('en-US', { 
      day: '2-digit', 
      month: 'short' 
    });
  };
  
  // Project badge styles
  export const getProjectBadgeStyle = (project: string): string => {
    return project === 'Demo' 
      ? 'text-blue-500 bg-blue-50'
      : 'text-orange-500 bg-orange-50';
  };
  