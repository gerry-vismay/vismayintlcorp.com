import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [editItemId, setEditItemId] = useState(null);
  const [editItem, setEditItem] = useState({ name: "", price: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/items", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (!res.ok) throw new Error("Unauthorized or Server Error");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.log("Failed to fetch Items", error);
    }
  };

  const handleAddItem = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) throw new Error("Add failed");

      const addedItem = await res.json();
      setItems([...items, addedItem]);
      setNewItem({ name: "", price: "" });
      toast.success("Item added!");
    } catch (err) {
      toast.error("Failed to add item");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/items/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Delete failed:", errorText);
        return;
      }

      setItems((prev) => prev.filter((item) => item.id !== id));
      toast.success("Item deleted!");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete item");
    }
  };
  const handleUpdate = async (id) => {
    try {
      const itemToUpdate = items.find((item) => item.id === id);
      await fetch(`http://localhost:5000/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(itemToUpdate),
      });
      setEditItemId(null);
      fetchItems();
      toast.success("Item updated!");
    } catch (error) {
      toast.error("Failed to update item");
    }
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

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
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
          <li key={item.id} className="border p-2 rounded flex justify-between">
            {editItemId === item.id ? (
              <>
                <input
                  className="border p-1 mr-2"
                  value={item.name}
                  onChange={(e) =>
                    handleItemChange(item.id, "name", e.target.value)
                  }
                />
                <input
                  className="border p-1 mr-2"
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(item.id, "price", e.target.value)
                  }
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleUpdate(item.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1"
                  onClick={() => setEditItemId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>
                  {item.name} - ${item.price}
                </span>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                    onClick={() => setEditItemId(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
