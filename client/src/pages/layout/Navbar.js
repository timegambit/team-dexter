import React, { useState } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar,
    List,
    ListItem,
    Badge,
    Menu,
    MenuItem,
    Link,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo_study.png';
// import profileImg from '../../images/profile-pic.png';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useStyles } from './NavbarStyles';
import { useGlobalContext } from '../../context/studyappContext';

const Navbar = () => {
    const classes = useStyles();
    const { profile, isLoading } = useGlobalContext();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log('test context', isLoading);

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" elevation={2}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo_study}>
                        <Link
                            color="inherit"
                            variant="inherit"
                            underline="none"
                            // component={RouterLink}
                            // to="/login"
                        >
                            <img src={logo} alt="logo_study" />
                        </Link>
                        <Typography variant="h3">studyapp</Typography>
                    </div>
                    <div className={classes.listContainer}>
                        <List>
                            <ListItem>
                                <NavLink
                                    color="inherit"
                                    variant="inherit"
                                    underline="none"
                                    to="/forum"
                                    style={{ opacity: '50%' }}
                                    activeStyle={{
                                        opacity: '100%',
                                    }}
                                    className={classes.linkStyles}
                                >
                                    Forum
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink
                                    color="inherit"
                                    variant="inherit"
                                    underline="none"
                                    to="/groups"
                                    activeStyle={{
                                        opacity: '100%',
                                    }}
                                    className={classes.linkStyles}
                                >
                                    Groups
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink
                                    color="inherit"
                                    variant="inherit"
                                    underline="none"
                                    to="/chat"
                                    activeStyle={{
                                        opacity: '100%',
                                    }}
                                    className={classes.linkStyles}
                                >
                                    Chats
                                </NavLink>
                                <Badge badgeContent={12} className={classes.badge} />
                            </ListItem>
                        </List>

                        <div></div>
                    </div>
                    <div className={classes.profile}>
                        <Avatar
                            alt="profiel_img"
                            src={
                                profile.imageUrl.length ? (
                                    profile.imageUrl
                                ) : (
                                    <PersonAddIcon />
                                )
                            }
                            className={classes.avatar}
                        />
                        <Button
                            endIcon={<ArrowDropDownIcon />}
                            className={classes.profile_button}
                            onClick={e => setAnchorEl(e.currentTarget)}
                        >
                            <Typography variant="h6">Profile</Typography>
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <ExitToAppIcon className={classes.icons} />
                                <Typography>Logout</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <AccountCircleIcon className={classes.icons} />
                                <Typography>My Profile</Typography>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
