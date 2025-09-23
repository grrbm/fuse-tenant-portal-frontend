import { cn } from "@/lib/utils"
import { useRouter } from "next/router"
import {
  BarChart3,
  FileText,
  ChevronDown,
} from "lucide-react"

const navigation = [
  { name: "Overview", icon: BarChart3, href: "/" },
  { name: "Forms", icon: FileText, href: "/forms" },
]

export function Sidebar() {
  const router = useRouter()
  
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-sidebar-foreground">Tenant Portal</h1>
        <p className="text-sm text-muted-foreground mt-1">Clinic Management</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {/* Main Navigation */}
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </a>
            )
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">TP</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Tenant Portal</p>
            <p className="text-xs text-muted-foreground truncate">admin@tenants.com</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}