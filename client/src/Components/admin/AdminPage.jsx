import { useEffect, useState } from "react";

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/items", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized or Server Error");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => {
        console.log("Failed to fetch items:", err);
      });
  }, []);

  const handleAddItem = async () => {
    const res = await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(newItem),
    });
    const addedItem = await res.json();
    setItems([...items, addedItem]);
    setNewItem({ name: "", price: "" });
  };

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
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Item
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="border p-2 rounded">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
