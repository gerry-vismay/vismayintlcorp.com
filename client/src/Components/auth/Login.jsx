import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      onLogin();
    } catch (err) {
      setError(err.message || "Login Failed");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 w-full"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Login;
