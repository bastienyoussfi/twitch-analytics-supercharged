import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function RootLayout() {
  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden fixed left-4 top-4">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <Sidebar className="hidden border-r lg:block" />
      
      <div className="flex-1 overflow-auto">
        <main className="h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
} 