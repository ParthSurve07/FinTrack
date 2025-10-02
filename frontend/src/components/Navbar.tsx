import { TrendingUp } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import { UserButton } from "@clerk/nextjs"; // Import Clerk's UserButton

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground" />
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold leading-none">Dashboard</h1>
              <p className="text-xs text-muted-foreground">Financial Overview</p>
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-primary">₹1,65,345</span>
              <span className="text-xs text-green-600">+2.5%</span>
            </div>
          </div>
          <ModeToggle />
          {/* Replace the DropdownMenu with the simpler UserButton */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
