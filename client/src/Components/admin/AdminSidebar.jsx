import { NavLink } from "react-router-dom";
import { LayoutDashboard, FileText, Users } from "lucide-react";

const AdminSidebar = ({ collapsed }) => {
  const linkClass =
    "flex items-center gap-3 p-2 rounded hover:bg-blue-100 text-gray-700";

  return (
    <aside
      className={`bg-white shadow-lg min-h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } px-4 py-6`}
    >
      <h1
        className={`text-blue-600 font-bold mb-10 text-xl transition-opacity duration-300 ${
          collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
        }`}
      >
        Admin Panel
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink to="/admin" className={linkClass}>
          <LayoutDashboard size={20} />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink to="/admin/manage" className={linkClass}>
          <FileText size={20} />
          {!collapsed && "Manage Content"}
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <Users size={20} />
          {!collapsed && "User Management"}
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
