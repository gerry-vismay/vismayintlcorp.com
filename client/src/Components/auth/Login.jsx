import React, { useEffect, useState } from "react";
import logo from "../../assets/images/vismayLogo.png"; // Adjust path to your actual logo image
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Load saved credentials on mount
  useEffect(() => {
    const savedForm = localStorage.getItem("rememberedCredentials");
    if (savedForm) {
      const parsed = JSON.parse(savedForm);
      setForm(parsed);
      setRemember(true);
    }
  }, []);

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

      if (remember) {
        localStorage.setItem("rememberedCredentials", JSON.stringify(form));
      } else {
        localStorage.removeItem("rememberedCredentials");
      }

      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message || "Login Failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/path/to/background.jpg")' }} // Replace with actual path
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-sm">
        <img src={logo} alt="Website Logo" className="w-32 mx-auto mb-6" />
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border p-2 mb-2 w-full rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 mb-4 w-full rounded"
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
