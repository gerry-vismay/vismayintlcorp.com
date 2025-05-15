import { useEffect, useState } from "react";

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  // get all Items
  const fetchItems = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/items", {
        headers: {
          Authorization: token, // 👈 just the token
        },
      });

      if (!res.ok) {
        throw new Error("Unauthorized or Session Expired!");
      }

      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.log("Network or parsing error:", err);
    }
  };

  return (
    <div className="px-4 ">
      <h2 className="text-2xl font-bold mb-4">DASHBOARD</h2>
      <table className="w-full border border-collapse border-solid border-blue-gray-100 text-xs">
        <thead className="border border-solid border-blue-gray-100">
          <tr>
            <th>ID</th>
            <th>Position</th>
            <th>Department</th>
            <th>Qualifications</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter((item) => {
              return item.status === "Active";
            })
            .map((item) => (
              <tr key={item.id}>
                <td className="text-center w-[3%] border border-solid border-blue-gray-100">
                  {item.id}
                </td>
                <td className="text-center border border-solid border-blue-gray-100 w-[9%]">
                  {item.position}
                </td>
                <td className="text-center border border-solid border-blue-gray-100 w-[9%]">
                  {item.department}
                </td>
                <td className="px-5 border border-solid border-blue-gray-100 w-[35%] ">
                  <ul className="list-disc">
                    {item.qualifications.map((requirement, i) => (
                      <li key={i}>{requirement}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-5 border border-solid border-blue-gray-100 w-[32%] ">
                  <ul className="list-disc">
                    {item.locations.map((loc, i) => {
                      return <li key={i}>{loc}</li>;
                    })}
                  </ul>
                </td>
                <td className="text-center border border-solid border-blue-gray-100 w-[7%]">
                  {item.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
