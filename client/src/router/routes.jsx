import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import GuestLayout from "../layouts/GuestLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";

// Pages
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import { WhoWeAre, Brands, Career, Contact, Policy } from "../Pages/index";
import PK from "../Pages/platinumkaraoke/PlatinumKaraokePage";
import LF from "../Pages/laifen/LaifenPage";
import OpenJobs from "../features/career/jobs/OpenJobs";
import Login from "../components/auth/Login";
import Error404 from "../Pages/Error404.jsx";
import Dashboard from "../Pages/admin/Dashboard.jsx";
import Manage from "../Pages/admin/Manage.jsx";
import Users from "../Pages/admin/Users.jsx";
import RequireAuth from "../components/auth/RequireAuth.jsx";
import AddContent from "../Pages/admin/AddContent.jsx";

// Auth check (you may want to move this to context or a hook later)
const isLoggedIn = !!localStorage.getItem("token");

const routes = createBrowserRouter(
  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <App />,
      children: [
        {
          element: <GuestLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "privacy-policy", element: <Policy /> },
            { path: "whoweare", element: <WhoWeAre /> },
            { path: "careers", element: <Career /> },
            { path: "careers/:department", element: <OpenJobs /> },
            { path: "ourbrands", element: <Brands /> },
            { path: "ourbrands/platinumkaraoke", element: <PK /> },
            { path: "ourbrands/laifen", element: <LF /> },
            { path: "contactus", element: <Contact /> },
          ],
        },
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: (
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              ),
            },
            {
              path: "manage",
              element: (
                <RequireAuth>
                  <Manage />
                </RequireAuth>
              ),
            },
            {
              path: "manage/add",
              element: (
                <RequireAuth>
                  <AddContent />
                </RequireAuth>
              ),
            },
            {
              path: "users",
              element: (
                <RequireAuth>
                  <Users />
                </RequireAuth>
              ),
            },
          ],
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

export default routes;
