// import React from "react";
// import { Clock, Calendar, Briefcase, LogOut } from "lucide-react";
// import { Button } from "../../ui/Button";

// const InternSidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-sidebar flex flex-col">
//       {/* Header */}
//       <div className="p-6 ">
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
//             <span className="text-white text-xs font-bold">C</span>
//           </div>
//           <span className="text-sidebar-foreground font-semibold text-lg">
//             Clayracine
//           </span>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-1 p-4 space-y-8">
//         <Button
//           variant="default"
//           className="w-full justify-start gap-3 h-14 text-white font-medium"
//           style={{
//             background: "linear-gradient(to bottom, #745541 0%, #C4AD9E 100%)",
//           }}
//         >
//           <Briefcase className="w-5 h-5" />
//           Apply Jobs
//         </Button>

//         <Button
//           variant="ghost"
//           className="w-full justify-start gap-3 h-12 text-sidebar-foreground hover:bg-sidebar-accent"
//         >
//           <Clock className="w-5 h-5" />
//           Time Sheet
//         </Button>

//         <Button
//           variant="ghost"
//           className="w-full justify-start gap-3 h-12 text-sidebar-foreground hover:bg-sidebar-accent"
//         >
//           <Calendar className="w-5 h-5" />
//           Payroll Calendar
//         </Button>
//       </nav>

//       {/* Logout Button */}
//       <div className="p-4 border-t border-sidebar-border">
//         <Button
//           variant="outline"
//           className="w-full justify-start gap-3 h-12 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent bg-transparent"
//         >
//           <LogOut className="w-5 h-5" />
//           Logout
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default InternSidebar;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Clock, Calendar, Briefcase, LogOut } from "lucide-react";
import { Button } from "../../ui/Button";
import { logout } from "../../../redux/feature/user/userSlice";

const InternSidebar = () => {
  const location = useLocation();

  // Menu items with paths
  const menuItems = [
    {
      key: "apply-jobs",
      label: "Apply Jobs",
      icon: <Briefcase className="w-5 h-5" />,
      path: "/",
    },
    {
      key: "time-sheet",
      label: "Time Sheet",
      icon: <Clock className="w-5 h-5" />,
      path: "/time-sheet",
    },
    {
      key: "payroll-calendar",
      label: "Payroll Calendar",
      icon: <Calendar className="w-5 h-5" />,
      path: "/payroll-calendar",
    },
  ];

  const handleLogout = () => {
    // Clear user info from localStorage
    logout();
    // Redirect to login page or any other action
    window.location.href = "/sign-in";
  };

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
            onClick={handleLogout}
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

export default InternSidebar;
