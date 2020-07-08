import React from "react";
import Dashboard from "./Pages/Dashboard";
import Schedules from "./Pages/Schedules";

export const RoutingList = [
    {
        path: "/Schedule",
        exact: true,
        component: <Schedules/>
    },
    {
        path: "/",
        exact: false,
        component: <Dashboard/>
    }
]