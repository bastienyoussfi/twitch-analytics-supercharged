import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  Play,
  Settings,
  Home,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    label: "Trending",
    icon: TrendingUp,
    href: "/trending",
  },
  {
    label: "Clips",
    icon: Play,
    href: "/clips",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("flex flex-col h-full bg-background", className)}>
      <div className="p-3">
        <h1 className="text-xl font-bold tracking-tight">
          Twitch Analytics
        </h1>
      </div>
      <ScrollArea className="flex-1 p-3">
        <nav className="flex flex-col gap-2">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={location.pathname === route.href ? "secondary" : "ghost"}
              className="justify-start"
              asChild
            >
              <Link to={route.href}>
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
} 