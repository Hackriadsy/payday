import React, { useState, useEffect } from "react";
import { Clock, Users, Activity } from "lucide-react";

// Mock data structure for global activity
interface GlobalActivityItem {
  id: string;
  type: "transfer" | "login" | "profile-update" | "schedule-created";
  timestamp: number;
  summary: string;
}

const GlobalActivityFooter: React.FC = () => {
  const [globalActivities, setGlobalActivities] = useState<
    GlobalActivityItem[]
  >([]);

  useEffect(() => {
    // Simulated real-time activity stream
    const fetchRecentActivities = async () => {
      // In a real implementation, this would be a WebSocket or server-sent events endpoint
      const mockActivities: GlobalActivityItem[] = [
        {
          id: "act1",
          type: "transfer",
          timestamp: Date.now() - 120000,
          summary: "A user completed a scheduled transfer",
        },
        {
          id: "act2",
          type: "login",
          timestamp: Date.now() - 300000,
          summary: "New user logged in",
        },
        {
          id: "act3",
          type: "schedule-created",
          timestamp: Date.now() - 60000,
          summary: "Recurring transfer schedule established",
        },
      ];

      setGlobalActivities(mockActivities);
    };

    fetchRecentActivities();
    const intervalId = setInterval(fetchRecentActivities, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  const formatTimeAgo = (timestamp: number): string => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  const getActivityIcon = (type: string) => {
    const iconProps = { size: 16, className: "mr-2 inline" };
    switch (type) {
      case "transfer":
        return <Activity {...iconProps} />;
      case "login":
        return <Users {...iconProps} />;
      case "schedule-created":
        return <Clock {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-slate-200 border-t p-3 text-xs text-secondary rounded-box mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-4">
        <div className="flex items-center badge badge-info badge-lg">
          <Users size={16} className="mr-2" />
          <span>Active Users: <strong>254</strong></span>
        </div>
        <div className="flex-grow flex flex-col items-start gap-2 overflow-y-auto max-h-28">
          {globalActivities.map((activity) => (
            <span
              key={activity.id}
              className="inline-block animate-pulse hover:animate-none"
            >
              {getActivityIcon(activity.type)}
              {activity.summary}
              <span className="text-gray-500 ml-1">
                ({formatTimeAgo(activity.timestamp)})
              </span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default GlobalActivityFooter;
