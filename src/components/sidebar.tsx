import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

type SidebarProps = {
  items: {
    name: string;
    icon: LucideIcon;
    url: string;
    metadata?: React.ReactNode;
  }[];
};

export default function Sidebar({ items }: SidebarProps) {
  const location = useLocation();

  const isActiveRoute = useCallback(
    (path: string): boolean => {
      const currentPath = location.pathname;
      if (currentPath === path) return true;
      if (!currentPath.startsWith(path)) return false;

      const sortedItems = items
        .filter((item) => item.url !== path && currentPath.startsWith(item.url))
        .sort((a, b) => b.url.length - a.url.length);

      for (const item of sortedItems) {
        if (currentPath === item.url) return false;
        if (item.url.length > path.length) return false;
      }

      return currentPath.startsWith(path);
    },
    [items, location.pathname]
  );

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="h-max max-w-64 w-full bg-white border border-slate-300 shadow-md text-primary menu hidden lg:menu-vertical rounded-box my-10 space-y-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={`${item.name}-${index}`} className="w-full">
              <a
                href={item.url}
                className={clsx(
                  "text-lg tooltip flex items-center gap-2",
                  isActiveRoute(item.url) && "active"
                )}
                data-tip={item.name}
              >
                <Icon size={24} />
                {item.name}
                {item.metadata}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Navigation */}
      <div className="btm-nav lg:hidden bg-white w-[95%] mx-auto my-5 px-3 rounded-md btm-nav-md z-50 shadow-lg border border-secondary">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.url);
          return (
            <a
              href={item.url}
              key={`${item.name}-${index}`}
              className={clsx(
                "w-full h-14 flex bg-transparent items-center justify-center",
                isActive
                  ? "active tooltip tooltip-primary border-primary text-primary border-0 font-extrabold"
                  : "text-secondary"
              )}
              data-tip={item.name}
            >
              <Icon size={24} />
              <span className="btm-nav-label">{item.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}

export type SidebarMenuItems = SidebarProps["items"];
