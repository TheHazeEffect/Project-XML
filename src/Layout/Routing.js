import React from "react";
import Dashboard from "./Pages/Dashboard";
import Schedules from "./Pages/Schedules";
import Reports from "./Pages/Reports";
import Students from "./Pages/Students";
import Modules from "./Pages/Modules";



export const RoutingList = [
    {
        path: "/Schedule",
        exact: true,
        component: <Schedules/>
    },
    {
        path: "/Modules",
        exact: true,
        component: <Modules/>
    },
    {
        path: "/Reports",
        exact: true,
        component: <Reports/>
    },
    {
        path: "/Students",
        exact: true,
        component: <Students/>
    },
    {
        path: "/",
        exact: false,
        component: <Dashboard/>
    }
]