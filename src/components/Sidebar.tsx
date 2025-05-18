
import { Link } from "react-router-dom";
import { 
  LayoutDashboard,
  BarChart2,
  FileText,
  Users,
  Settings
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    path: "/",
  },
  {
    title: "Reports",
    icon: <FileText className="h-5 w-5" />,
    path: "/reports",
  },
  {
    title: "Analytics",
    icon: <BarChart2 className="h-5 w-5" />,
    path: "/analytics",
  },
  {
    title: "Transactions",
    icon: <FileText className="h-5 w-5" />,
    path: "/transactions",
  },
  {
    title: "Users",
    icon: <Users className="h-5 w-5" />,
    path: "/users",
  },
  {
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    path: "/settings",
  },
];

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-finance-darkSidebar fixed left-0 top-0 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold text-white">Financial Admin</h1>
      </div>
      <nav className="flex-grow py-4">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-finance-darkCard transition-colors"
              >
                <span className="mr-3 text-gray-400">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-finance-orange flex items-center justify-center">
            <span className="text-white font-medium">JD</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
