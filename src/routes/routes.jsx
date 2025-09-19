// import { createBrowserRouter } from "react-router-dom";
// import InternMainLayout from "../component/layouts/internUsersLayout/internMainLayout";
// import ApplyJobs from "../component/users/internEmployee/ApplyJobs";
// import TimeSheet from "../component/users/internEmployee/TimeSheet";
// import TestInput from "../component/users/internEmployee/TestInput";
// import RoleSelector from "../component/authentication/roleSelector/RoleSelector";
// import InternRegister from "../component/authentication/internRegister/InternRegister";
// import SignIn from "../component/authentication/signIn/SignIn";
// import PasswordRecovery from "../component/authentication/signIn/PasswordRecovery";
// import ResetPassword from "../component/authentication/signIn/ResetPassword";
// import BankAccount from "../component/users/internEmployee/BankAccount";
// import TempMainLayout from "../component/layouts/tempEmployeeLayout/TempMainLayout";
// import TempApplyJob from "../component/users/temporaryEmployee/TempApplyJob";
// import AdminMainLayout from "../component/layouts/adminLayout/AdminMainLayout";
// import Overview from "../component/users/admin/Overview";
// import RequestList from "../component/users/admin/RequestList";
// import AdminCalender from "../component/users/admin/adminCalender/AdminCalender";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <InternMainLayout></InternMainLayout>,
//     children: [
//       {
//         index: true,
//         element: <ApplyJobs></ApplyJobs>,
//       },
//       {
//         path: "/bank-details",
//         element: <BankAccount></BankAccount>,
//       },
//       {
//         path: "/time-sheet",
//         element: <TimeSheet></TimeSheet>,
//       },
//       {
//         path: "/test-input",
//         element: <TestInput></TestInput>,
//       },
//     ],
//   },
//   {
//     path: "/temporary-employee",
//     element: <TempMainLayout></TempMainLayout>,
//     children: [
//       {
//         path: "",
//         element: <TempApplyJob></TempApplyJob>,
//       },
//     ],
//   },
//   {
//     path: "/role-selector",
//     element: <RoleSelector></RoleSelector>,
//   },
//   {
//     path: "/intern-register",
//     element: <InternRegister></InternRegister>,
//   },
//   {
//     path: "/sign-in",
//     element: <SignIn></SignIn>,
//   },
//   {
//     path: "/password-recovery",
//     element: <PasswordRecovery></PasswordRecovery>,
//   },
//   {
//     path: "/reset-password",
//     element: <ResetPassword></ResetPassword>,
//   },
//   {
//     path: "/admin",
//     element: <AdminMainLayout></AdminMainLayout>,
//     children: [
//       {
//         index: true,
//         element: <Overview></Overview>,
//       },
//       {
//         path: "request-list",
//         element: <RequestList></RequestList>,
//       },
//       {
//         path: "admin-calender",
//         element: <AdminCalender></AdminCalender>,
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import InternMainLayout from "../component/layouts/internUsersLayout/internMainLayout";
import ApplyJobs from "../component/users/internEmployee/ApplyJobs";
import TimeSheet from "../component/users/internEmployee/TimeSheet";
import TestInput from "../component/users/internEmployee/TestInput";
import RoleSelector from "../component/authentication/roleSelector/RoleSelector";
import InternRegister from "../component/authentication/internRegister/InternRegister";
import SignIn from "../component/authentication/signIn/SignIn";
import PasswordRecovery from "../component/authentication/signIn/PasswordRecovery";
import ResetPassword from "../component/authentication/signIn/ResetPassword";
import BankAccount from "../component/users/internEmployee/BankAccount";
import TempMainLayout from "../component/layouts/tempEmployeeLayout/TempMainLayout";
import TempApplyJob from "../component/users/temporaryEmployee/TempApplyJob";
import AdminMainLayout from "../component/layouts/adminLayout/AdminMainLayout";
import Overview from "../component/users/admin/Overview";
import RequestList from "../component/users/admin/RequestList";
import AdminCalender from "../component/users/admin/adminCalender/AdminCalender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InternMainLayout />,
    children: [
      {
        index: true, // default route
        element: <ApplyJobs />,
      },
      {
        path: "bank-details",
        element: <BankAccount />,
      },
      {
        path: "time-sheet",
        element: <TimeSheet />,
      },
      {
        path: "test-input",
        element: <TestInput />,
      },
    ],
  },
  {
    path: "/temporary-employee",
    element: <TempMainLayout />,
    children: [
      {
        index: true,
        element: <TempApplyJob />,
      },
    ],
  },
  {
    path: "/role-selector",
    element: <RoleSelector />,
  },
  {
    path: "/intern-register",
    element: <InternRegister />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/admin",
    element: <AdminMainLayout />,
    children: [
      {
        index: true, // default admin route
        element: <Overview />,
      },
      {
        path: "request-list", // relative path
        element: <RequestList />,
      },
      {
        path: "admin-calender",
        element: <AdminCalender />,
      },
    ],
  },
]);

export default router;
