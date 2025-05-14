import React, { useState } from "react";
import { toast } from "react-toastify";

import TagInput from "../../components/tag/TagInput";

const AddContent = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    position: "",
    department: "",
    qualifications: [],
    locations: [],
    status: "Active",
  });
  const [qualificationInput, setQualificationInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const token = localStorage.getItem("token");
  // Add Items
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
      setNewItem({
        position: "",
        department: "",
        qualifications: [],
        locations: [],
        status: "Active",
      });
      toast.success("Item added!");
    } catch (err) {
      toast.error("Failed to add item");
    }
  };
  return (
    <div className="mb-8 space-y-2">
      <h2 className="text-2xl font-bold mb-4">Add Job</h2>
      <input
        type="text"
        placeholder="Position"
        value={newItem.position}
        onChange={(e) => setNewItem({ ...newItem, position: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Department"
        value={newItem.department}
        onChange={(e) => setNewItem({ ...newItem, department: e.target.value })}
        className="border p-2 mr-2"
      />
      <TagInput
        value={newItem.qualifications}
        onChange={(updated) =>
          setNewItem({ ...newItem, qualifications: updated })
        }
        placeholder="Type qualification and press Enter"
      />

      <TagInput
        value={newItem.locations}
        onChange={(updated) => setNewItem({ ...newItem, locations: updated })}
        placeholder="Type location and press Enter"
      />

      <input
        type="hidden"
        value={newItem.status}
        onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Create Job
      </button>
    </div>
  );
};

export default AddContent;
