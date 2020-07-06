import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,studentId, firstName, lastName, Modules) {
  return { id, studentId, firstName, lastName, Modules };
}

const rows = [
  createData(1,1224515, 'Troy', 'Baker', 4),
  createData(1,1524515, 'Troy', 'Baker', 2),
  createData(1,424515, 'Troy', 'Baker', 3),
  createData(1,889515, 'Troy', 'Baker', 4),
  createData(1,1445515, 'Troy', 'Baker', 2),
  createData(1,127515, 'Troy', 'Baker', 1),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Students</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Student Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Modules</TableCell>

            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.studentId}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.Modules}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Students
        </Link>
      </div>
    </React.Fragment>
  );
}
