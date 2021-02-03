import React from 'react'
import Circle from "./Circles.jsx"
// import {Drawer,Hidden,Divider,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core'
import {Menu,Close} from '@material-ui/icons'


export default function Header(prop){

  return(
    <header>
      <Circle/>
      <div className="head-middle">
        <h4>Pure Water Delivery</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed lorem eleifend, convallis urna vitae, condimentum turpis. Suspendisse potenti.</p>
      </div>

      <div className="hidden-icon">
      {prop.button?<Close onClick={()=>prop.click(prop.button)}/>:<i className="fa fa-navicon" onClick={()=>prop.click(prop.button)}/>}
      </div>

      <nav className="header-btn">
        <ul>
          <li><a href="/custAcc">Account</a></li>
          <li><a href="/deliv">Book Delivery</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>
      {/* <MenuIcon onClick={()=>{updBtn(true)}} />
      <Drawer anchor='top' open={btn} classes={{paper:classes.root}}>
        <div className={classes.head}>
          <h1 onClick={()=>{updBtn(false)}}>X</h1>
        </div>
        <Divider/>
        <List>
            <ListItem button>
              <ListItemIcon><AccountCircle/></ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ShoppingCart/></ListItemIcon>
              <ListItemText primary="Book Delivery" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExitToApp/></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
        </List>
      </Drawer> */}

    </header>
  );
}

// import { makeStyles } from '@material-ui/core/styles';
// import {MenuIcon,ExitToApp,AccountCircle,ShoppingCart} from '@material-ui/icons/Menu'

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(90deg, rgba(58,142,180,1) 0%, rgba(70,175,223,1) 44%, rgba(82,198,251,1) 95%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: "white",
//     height: "100%",
//     padding: '0 30px',
//   },
//
// });
