import { useState } from "react";
import { Outlet } from "react-router-dom";

import SchoolSidebar from "./SchoolSidebar";
import SchoolNavbar from "./SchoolNavbar";

export default function SchoolLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <SchoolSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1">

        <SchoolNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}