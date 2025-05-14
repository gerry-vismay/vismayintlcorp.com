import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/common/Button";
import TagInput from "../../components/tag/TagInput";
const Manage = () => {
  const [items, setItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  // get all Items
  const fetchItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/items", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (!res.ok) throw new Error("Unauthorized or Server Error");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.log("Failed to fetch Items", err);
    }
  };

  // Delete Items
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

  // Update items
  const handleUpdate = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(editForm), // Use the edited copy
      });
      setEditItemId(null);
      setEditForm(null); // clear
      fetchItems();
      toast.success("Item updated!");
    } catch (error) {
      toast.error("Failed to update item");
    }
  };

  // Update Items function
  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="px-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Manage</h2>
        <Button
          href="manage/add"
          label="+ Add Item"
          className="rounded-none md:text-xs"
        />
      </div>
      <table className="w-full border border-collapse border-solid border-blue-gray-100 text-xs">
        <tr className="border border-solid border-blue-gray-100">
          <th>ID</th>
          <th>Position</th>
          <th>Department</th>
          <th>Qualifications</th>
          <th>Location</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {items.map((item) => (
          <>
            <tr>
              <td className="text-center w-[3%] border border-solid border-blue-gray-100">
                {item.id}
              </td>
              <td className="text-center border border-solid border-blue-gray-100 w-[9%]">
                {item.position}
              </td>
              <td className="text-center border border-solid border-blue-gray-100 w-[9%]">
                {item.department}
              </td>
              <td className="px-5 border border-solid border-blue-gray-100 w-[35%]">
                <ul className="list-disc">
                  {item.qualifications.map((requirement) => (
                    <li>{requirement}</li>
                  ))}
                </ul>
              </td>
              <td className=" px-5 border border-solid border-blue-gray-100 w-[35%]">
                <ul className="list-disc">
                  {item.locations.map((loc) => {
                    return <li>{loc}</li>;
                  })}
                </ul>
              </td>
              <td className="border border-solid border-blue-gray-100 w-[5%] text-center">
                {item.status}
              </td>
              <td className="w-[7%] p-1 border border-solid border-blue-gray-100">
                <div className="flex justify-center">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                    onClick={() => {
                      setEditItemId(item.id);
                      setEditForm({ ...item }); // clone the item
                    }}
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
              </td>
            </tr>
            {editItemId === item.id && (
              <>
                <tr>
                  <td className="text-center">
                    <span>{item.id}</span>
                  </td>
                  <td>
                    <input
                      value={editForm.position}
                      onChange={(e) =>
                        setEditForm({ ...editForm, position: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editForm.department}
                      onChange={(e) =>
                        setEditForm({ ...editForm, department: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <TagInput
                      value={editForm.qualifications}
                      onChange={(updated) =>
                        setEditForm({ ...editForm, qualifications: updated })
                      }
                    />
                  </td>
                  <td>
                    <TagInput
                      value={editForm.locations}
                      onChange={(updated) =>
                        setEditForm({ ...editForm, locations: updated })
                      }
                    />
                  </td>
                  <td>
                    <select
                      value={editForm.status}
                      onChange={(e) =>
                        setEditForm({ ...editForm, status: e.target.value })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td>
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="bg-green-500 text-white px-2 py-1 "
                        onClick={() => handleUpdate(editForm.id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white px-2 py-1"
                        onClick={() => {
                          setEditItemId(null);
                          setEditForm(null);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            )}
          </>
        ))}
      </table>
    </div>
  );
};

export default Manage;
