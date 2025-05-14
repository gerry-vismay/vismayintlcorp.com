import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("adminSidebarCollapsed");
    if (savedState !== null) {
      setIsCollapsed(savedState === "true");
    }
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const newState = !prev;
      localStorage.setItem("adminSidebarCollapsed", newState);
      return newState;
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar collapsed={isCollapsed} />
      <div className="flex flex-col flex-1">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
