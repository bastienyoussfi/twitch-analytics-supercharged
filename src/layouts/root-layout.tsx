import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function RootLayout() {
  return (
    <div className="flex h-screen bg-background relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute -top-[40%] -left-[40%] w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden fixed left-4 top-4 z-50 hover:bg-background/80 backdrop-blur-sm"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80 bg-background/95 backdrop-blur-md border-r border-border/40">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <Sidebar className="hidden border-r lg:block bg-background/95 backdrop-blur-md w-80" />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto relative">
        <main className="h-full p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
} 