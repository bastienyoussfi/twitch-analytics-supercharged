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
    <div className={cn("flex flex-col h-full bg-background border-r border-border/40", className)}>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Twitch Analytics
          </h1>
        </div>
      </div>
      <ScrollArea className="flex-1 px-4">
        <nav className="flex flex-col gap-2 pb-4">
          {routes.map((route) => {
            const isActive = location.pathname === route.href;
            return (
              <Button
                key={route.href}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "justify-start h-12 w-full",
                  isActive && "bg-primary/10 text-primary hover:bg-primary/15",
                  !isActive && "hover:bg-muted"
                )}
                asChild
              >
                <Link to={route.href}>
                  <route.icon className={cn(
                    "mr-3 h-5 w-5",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )} />
                  <span className={cn(
                    "font-medium",
                    isActive ? "text-primary" : "text-foreground"
                  )}>
                    {route.label}
                  </span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
} 