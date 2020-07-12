import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import ScheduleTable from "./ScheduleTable";
import Calendar from "react-calendar" 
import 'react-calendar/dist/Calendar.css';

export default function Schedules(){
    const currentTime = new Date().toDateString();
    const [date,setdate] = useState(currentTime)


    const onChange = date => setdate(date.toDateString())
    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Calendar
                    onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} md={5} lg={8}>
                    <ScheduleTable
                    date={date}
                    />
                </Grid>
            </Grid>
        </>
    )
}