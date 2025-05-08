import { Outlet } from "react-router-dom";
import AdminSidebar from "./../components/admin/AdminSidebar";
import AdminHeader from "./../components/admin/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
