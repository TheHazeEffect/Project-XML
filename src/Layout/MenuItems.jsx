import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  BrowserRouter as Router,

  NavLink
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: { 
    textDecoration: 'none',
    color: '#272727'
  }
}))


export const PrimaryMenuList = [
  {
    Name: "Dashboard",
    goto: "/",
    icon: <DashboardIcon/>,
    strict: true
  },
  {
    Name: "Schedule",
    goto: "/Schedule",
    icon: <PeopleIcon/>,
    strict: true

  },
  {
    Name: "Reports",
    goto: "/Reports",
    icon: <LayersIcon/>,
    strict: true

  },
]


export function PrimaryMenu() {
  const classes = useStyles()
  return(
    <>
    <div>
      {PrimaryMenuList.map( (item,i)=> (
        <ListItem button key={i}>

          <ListItemIcon>
            {item.icon}
          </ListItemIcon>

          <NavLink to={item.goto} className={classes.link} strict={item.strict}>
            <ListItemText primary={item.Name} />
          </NavLink>
        
      </ListItem>   
      ))}
    </div>
    </>
  );
}

export const ConfigurationMenuList = [
  {
    Name: "Modules",
    goto: "/Modules",
    icon: <AssignmentIcon/>,
    strict: true

  },
  {
    Name: "Students",
    goto: "/Students",
    icon: <PeopleIcon/>,
    strict: true

  },
]

export function ConfigurationMenu() {

  const classes = useStyles()
  return (
    <div>
      <ListSubheader inset>Configuration</ListSubheader>
      {ConfigurationMenuList.map(( item,i) => (
        <ListItem key={i} button >

          <ListItemIcon>
            {item.icon}
          </ListItemIcon>

          <NavLink to={item.goto} className={classes.link} strict={item.strict}>
            <ListItemText primary={item.Name} />
          </NavLink>

      </ListItem>
      ))}
      
    </div>
  );
}

