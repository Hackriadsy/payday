import { Sidebar, SidebarMenuItems } from "@app/components";
import {
  BellDot,
  CalendarSync,
  Home,
  LibraryBig,
  Settings2,
} from "lucide-react";
import { Outlet } from "react-router-dom";

const MENU_ITEMS: SidebarMenuItems = [
  {
    name: "Analytics",
    icon: Home,
    url: "/console",
  },
  {
    name: "Payrolls",
    icon: LibraryBig,
    url: "/console/payrolls",
  },
  {
    name: "Settings",
    icon: Settings2,
    url: "/console/settings",
  },
  {
    name: "Notifications",
    icon: BellDot,
    url: "/console/notifications",
    metadata: <span className="badge badge-info font-bold">2</span>,
  },
  {
    name: "Schedule",
    icon: CalendarSync,
    url: "/console/schedule",
  },
];

export default function ConsoleLayout() {
  return (
    <div className="h-full pl-4 flex items-start gap-10">
      <Sidebar items={MENU_ITEMS} />
      <main className="max-h-full flex-1 overflow-y-auto pr-4 pt-8 pb-16 lg:pb-8">
        <div className="container max-w-screen-xl mr-auto"><Outlet /></div>
      </main>
    </div>
  );
}
