import { useEffect, useState, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null); // no typing in .jsx
  const INACTIVITY_LIMIT = 60 * 60 * 1000; // 1 hour

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    navigate("/login");
  };

  const resetTimer = () => {
    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Check token expiration
    const expiresAt = parseInt(localStorage.getItem("expiresAt") || "0", 10);
    const now = Date.now();

    if (!expiresAt || now >= expiresAt) {
      logout();
      return;
    }

    // Set a new timeout
    const remainingTime = Math.min(expiresAt - now, INACTIVITY_LIMIT);
    timeoutRef.current = setTimeout(() => {
      logout();
    }, remainingTime);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiresAt = localStorage.getItem("expiresAt");

    if (!token || !expiresAt) {
      logout();
      return;
    }

    // Start timer on load
    resetTimer();

    // Listen to user activity
    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Sidebar collapsed state
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
