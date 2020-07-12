import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import AssementData from './DummyData/Assignments'
import CloseIcon from '@material-ui/icons/Close';

// Generate Order Data
function createData(id,name,time, venue, duration,weight,isExam) {
  return { id, name, time, venue, duration,weight,isExam};
}

const rows = AssementData.map( (data,i) => (
  createData(i,data.name, data.time, data.locationId,data.duration,data.weight,data.isExam)
))


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ScheduleTable({date}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Schedules - {date}
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Module</TableCell>
            <TableCell>location</TableCell>
            <TableCell>time</TableCell>
            <TableCell>duration</TableCell>
            <TableCell>weight</TableCell>
            <TableCell>isExam</TableCell>

            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.venue}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>
              {row.isExam === true ? <CheckIcon/> : <CloseIcon/>}
              </TableCell>

              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Schedules
        </Link>
      </div>
    </React.Fragment>
  );
}
