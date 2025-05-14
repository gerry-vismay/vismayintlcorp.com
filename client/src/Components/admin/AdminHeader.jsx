import { Menu } from "lucide-react";

const AdminHeader = ({ toggleSidebar }) => {
  // Logout User
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    await fetch("http://localhost:5000/api/logout", {
      method: "POST",
      headers: { Authorization: token },
    });

    localStorage.removeItem("token");
    window.location.reload(); // or redirect to login page
  };
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <button
        onClick={toggleSidebar}
        className="text-gray-600 hover:text-blue-600"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Admin</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
        <img
          src="https://i.pravatar.cc/32"
          alt="Admin Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default AdminHeader;
