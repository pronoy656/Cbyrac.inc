import { createBrowserRouter } from "react-router-dom";
import InternMainLayout from "../component/layouts/internUsersLayout/internMainLayout";
import ApplyJobs from "../component/users/internEmployee/ApplyJobs";
import TimeSheet from "../component/users/internEmployee/TimeSheet";

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
        path: "/time-sheet",
        element: <TimeSheet></TimeSheet>,
      },
    ],
  },
]);

export default router;
