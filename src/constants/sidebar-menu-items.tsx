import { SidebarMenuItems } from "@app/components";
import {
  BellDot,
  CalendarSync,
  Home,
  LibraryBig,
  Settings2,
} from "lucide-react";

export const SIDEBAR_MENU_ITEMS: SidebarMenuItems = [
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