import { Sidebar } from "@app/components";
import { SIDEBAR_MENU_ITEMS } from "@app/constants/sidebar-menu-items";
import { Outlet } from "react-router-dom";

export default function ConsoleLayout() {
  return (
    <div className="h-full pl-4 flex items-start gap-10">
      <Sidebar items={SIDEBAR_MENU_ITEMS} />
      <main className="max-h-full flex-1 overflow-y-auto pr-4 pt-8 pb-16 lg:pb-8">
        <div className="container max-w-screen-xl mr-auto"><Outlet /></div>
      </main>
    </div>
  );
}
