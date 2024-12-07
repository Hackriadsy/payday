import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { useLocation, matchPath } from "react-router-dom";

type SidebarProps = {
  items: {
    name: string;
    icon: LucideIcon;
    url: string;
    metadata?: React.ReactNode;
  }[];
};

const isActiveRoute = (currentPath: string, routePattern: string): boolean => {
  // Use react-router's matchPath for robust route matching
  const match = matchPath({ path: routePattern, end: false }, currentPath);

  return match !== null;
};

export default function Sidebar({ items }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="h-max max-w-64 w-full bg-white shadow-md border border-primary text-primary menu hidden lg:menu-vertical rounded-box my-10 space-y-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={`${item.name}-${index}`} className="w-full">
              <a
                href={item.url}
                className={clsx(
                  "text-lg tooltip flex items-center gap-2",
                  isActiveRoute(location.pathname, item.url) && "active"
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
      <div className="btm-nav lg:hidden bg-white w-[95%] mx-auto my-5 px-3 rounded-md btm-nav-md z-50 shadow-lg border border-slate-200">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(location.pathname, item.url);
          return (
            <a
              href={item.url}
              key={`${item.name}-${index}`}
              className={clsx(
                "w-full h-14 flex bg-transparent items-center justify-center",
                isActive
                  ? "active tooltip tooltip-primary border-primary text-primary border-t-4 font-extrabold py-2"
                  : "text-secondary"
              )}
              data-tip={item.name}
            >
              <Icon size={24} />
              {!isActive && <span className="btm-nav-label">{item.name}</span>}
            </a>
          );
        })}
      </div>
    </>
  );
}

export type SidebarMenuItems = SidebarProps["items"];
