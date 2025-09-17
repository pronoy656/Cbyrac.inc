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

const router = createBrowserRouter([
  {
    path: "/",
    element: <InternMainLayout></InternMainLayout>,
    children: [
      {
        path: "",
        element: <ApplyJobs></ApplyJobs>,
      },
      {
        path: "/bank-details",
        element: <BankAccount></BankAccount>,
      },
      {
        path: "/time-sheet",
        element: <TimeSheet></TimeSheet>,
      },
      {
        path: "/test-input",
        element: <TestInput></TestInput>,
      },
    ],
  },
  {
    path: "/role-selector",
    element: <RoleSelector></RoleSelector>,
  },
  {
    path: "/intern-register",
    element: <InternRegister></InternRegister>,
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery></PasswordRecovery>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>,
  },
]);

export default router;
