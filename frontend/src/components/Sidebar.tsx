import {
  Home,
  PieChart,
  Receipt,
  Settings,
  TrendingUp,
  User,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs" // Import Clerk's UserButton

const mainItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: PieChart,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: Receipt,
  },
]

const settingsItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-bold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              FinTrack
            </span>
            <span className="truncate text-xs text-muted-foreground">
              Track • Analyze • Grow
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        {/* Use Clerk's UserButton for a complete profile/logout menu */}
        <UserButton afterSignOutUrl="/" />
      </SidebarFooter>
    </Sidebar>
  )
}
