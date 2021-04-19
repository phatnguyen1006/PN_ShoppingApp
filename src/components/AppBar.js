import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
// firebase SignOUt:
import SignOut from '../features/Auth/SignOut';
// fakeAuth:
import { fakeAuth } from '../features/Auth/SignIn';
import '../../src/index.css';

// Back Button
import GoBackButton from '../buttons/backButton';
// Change-Bar-theme
import { BarTheme } from '../context/BarTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar({ displayName }) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    changeBar();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // FakeAuth:

  // change-theme
  const { barState, changeBar } = useContext(BarTheme);
  // style:
  let style;
  if (!barState.color) { style = { background: "#663399" } }
  // console.log(style);
  // console.log(barState);

  return (
    <div className={classes.root}>
      <GoBackButton />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'LightMode' : 'DarkMode'}
        />
      </FormGroup>
      <AppBar style={style} position="static">
        <Toolbar>
          <div className="dropdown">
            <IconButton onClick={changeBar} edge="start" className="dropbtn" color="inherit" aria-label="menu">
            <MenuIcon />
                  </IconButton>
                <div className="dropdown-content">
                  <Link to="/about">About</Link>
                  <Link to="/todolist">TodoList</Link>
                  <Link to="/products">Products</Link>
                  {fakeAuth.isAuthenticated && (<Link to="/admin">Admin</Link>)}
                </div>
        </div>
          <Typography variant="h6" className={classes.title}>
            NTP
          </Typography>
          {fakeAuth.isAuthenticated ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link style={{
                    textDecoration: "none",
                    color: "green"
                  }} to="/signin">{displayName}</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  style={{
                    color: "red"
                  }} onClick={() => {
                    SignOut()
                    setAnchorEl(null)
                  }}>
                    Logout
                </MenuItem>
              </Menu>
            </div>) : (
              <Link to="/signin"
                style={{
                  textDecoration: "none",
                  color: "red"
                }}
              >SignIn</Link>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
