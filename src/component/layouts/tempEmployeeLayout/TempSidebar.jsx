import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Clock, Calendar, Briefcase, LogOut } from "lucide-react";
import { Button } from "../../ui/Button";

const TempSidebar = () => {
  const location = useLocation();

  // Menu items with paths
  const menuItems = [
    {
      key: "apply-jobs",
      label: "Apply Jobs",
      icon: <Briefcase className="w-5 h-5" />,
      path: "/temporary-employee",
    },
    {
      key: "time-sheet",
      label: "Time Sheet",
      icon: <Clock className="w-5 h-5" />,
      path: "time-sheet-temp",
    },
    {
      key: "payroll-calendar",
      label: "Payroll Calendar",
      icon: <Calendar className="w-5 h-5" />,
      path: "/temporary-employee/payroll-calendar",
    },
  ];

  return (
    <div className="w-64 h-screen bg-sidebar flex flex-col">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <img className="w-14 h-14" src="/cbyrac-logo.png" alt="" />
          <p className="text-xl font-bold"> Cbyrac, Inc</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-6 py-5 border-b border-sidebar-border px-4 flex flex-col">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.key} to={item.path}>
              {isActive ? (
                <Button
                  className="w-full justify-start gap-3 h-14 font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(to bottom, #745541 0%, #C4AD9E 100%)",
                  }}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-14 text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  {item.icon}
                  {item.label}
                </Button>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-sidebar-border">
        <Link to="/logout">
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent bg-transparent"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TempSidebar;
