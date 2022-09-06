import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './Sidebar.css';

import { FaRegQuestionCircle } from "react-icons/fa";
import {MdDashboard} from "react-icons/md";
import {IoNotifications} from "react-icons/io5";
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  backgroundColor:'white',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    backgroundColor:'white',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor:'white',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  
}));


export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isopen, setOpen1] = React.useState(false);
  const [isopen2, setOpen2] = React.useState(false);
  const [isopen3, setOpen3] = React.useState(false);
  

  const handleClick = () => {
    setOpen1(!isopen);
  };
  const handleClick2 = () => {
    setOpen2(!isopen2);
  };
  const handleClick3 = () => {
    setOpen3(!isopen3);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  position="static" open={open}>
        <Toolbar className='color'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <label>Good morning!</label>
          <label className='datetime'> &nbsp;  Tue Jan 12, 2021 9:39am</label>  
          </Typography>
          <Typography className='marginleft' noWrap component="div">
          <FaRegQuestionCircle />
          &nbsp;
          <IoNotifications/>
          &nbsp;
         
          <label className='navname'>Nader Amer</label>
          
          <label className='navcircle'>NA</label>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
               PaperProps={{
                sx: {
                  backgroundColor: "#050e2d"
                }}}
            
          sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <DrawerHeader>
          <IconButton  className='color2' onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Quick Access"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#050e2d',color:'white' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
      <ListItemButton>
      <ListItemIcon>
              <MdDashboard className='coloring' />
            </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      
    <ListSubheader component="div" id="nested-list-subheader" className='left'>
          Settings
        </ListSubheader>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="ATM Settings" />
        {isopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemText primary="Business Setup" />
        {isopen2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isopen2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemText primary="User Management" />
        {isopen3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isopen3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            
            <ListItemText primary="Users" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            
            <ListItemText primary="Profiles" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            
            <ListItemText primary="Groups" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="License Management" />
      </ListItemButton>
      
    </List>
        <Divider />
    
      </Drawer>
  
    </Box>
  );
}
