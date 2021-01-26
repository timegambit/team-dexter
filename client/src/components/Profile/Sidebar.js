import React, { useState } from 'react';
import { Grid, Typography, Badge, Divider, Avatar, Button } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';

import profilePic from '../../static/images/profilePicSample.png';
import { chatList, courseGroupList } from '../../data/mockData';
import { useStyles } from './SidebarStyles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Drawer = props => {
    const classes = useStyles();
    const location = useLocation();

    const [chatId, setChatId] = useState(null);
    const [isExpand, setIsExpand] = useState(false);
    const [courseId, setCourseId] = useState(null);

    const showAnswer = id => {
        setCourseId(id);
        setIsExpand(preState => !preState);
    };

    if (location.pathname === '/chat')
        return (
            <Grid container className={classes.list_container}>
                <Grid item className={classes.chat_head}>
                    <Typography>All Chats</Typography>
                    <Badge badgeContent={12} className={classes.badge} />
                </Grid>
                <Divider className={classes.divider} />
                {chatList.map(cg => {
                    let activeChat = null;
                    if (cg.id === chatId) {
                        activeChat = <div className={classes.active_line}></div>;
                    }
                    return (
                        <React.Fragment key={cg.id}>
                            <Grid
                                item
                                container
                                className={
                                    cg.id === chatId
                                        ? classes.chat_list_active
                                        : classes.chat_list
                                }
                                onClick={() => setChatId(cg.id)}
                            >
                                {activeChat}
                                <Grid item className={classes.avatar_container}>
                                    <Avatar
                                        alt="chat_group_img"
                                        src={cg.imgUrl}
                                        variant="rounded"
                                        className={classes.avatar}
                                    />
                                </Grid>
                                <Grid item container className={classes.group_member}>
                                    <Typography className={classes.group_name}>
                                        {cg.chatGroup}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {cg.members} members
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider className={classes.divider} />
                        </React.Fragment>
                    );
                })}
            </Grid>
        );

    if (location.pathname === '/forum')
        return (
            <Grid>
                <Grid item className={classes.chat_head}>
                    <Typography>My Courses</Typography>
                    <Badge badgeContent={3} className={classes.badge} />
                </Grid>
                <Grid item>
                    {courseGroupList.map(cgl => {
                        let groupList = null;
                        if (isExpand && cgl.id === courseId)
                            groupList = cgl.groups.map(group => {
                                return (
                                    <Typography key={group.id}>{group.name}</Typography>
                                );
                            });
                        return (
                            <div key={cgl.id} className={classes.accordion_container}>
                                <div>
                                    <Typography>{cgl.name}</Typography>
                                    <Button onClick={() => showAnswer(cgl.id)}>
                                        {isExpand && courseId === cgl.id ? (
                                            <RemoveIcon />
                                        ) : (
                                            <AddIcon />
                                        )}
                                    </Button>
                                </div>
                                <div>{groupList}</div>
                            </div>
                        );
                    })}
                </Grid>
            </Grid>
        );

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            item
            className={classes.drawer}
        >
            {/* Profile briefing container */}
            <Grid container item direction="column" alignItems="center" sm={3}>
                <img
                    src={profilePic}
                    alt="Ashly Sanford"
                    className={classes.profilePic}
                />

                <Typography className={classes.profileName} align="center">
                    Ashly Sanford
                </Typography>
            </Grid>

            {/* Profile Links container */}
            <Grid container item direction="column" className={classes.linkContainer}>
                <NavLink
                    to="/profile"
                    exact
                    activeStyle={{
                        opacity: '100%',
                    }}
                    className={classes.linkStyles}
                >
                    User Info
                </NavLink>
                <NavLink
                    to="/profile/courses"
                    exact
                    activeStyle={{
                        opacity: '100%',
                    }}
                    className={classes.linkStyles}
                >
                    My Courses
                </NavLink>
                <NavLink
                    to="/profile/settings"
                    exact
                    activeStyle={{
                        opacity: '100%',
                    }}
                    className={classes.linkStyles}
                >
                    Settings
                </NavLink>
                <NavLink
                    to="/profile/notifications"
                    exact
                    activeStyle={{
                        opacity: '100%',
                    }}
                    className={classes.linkStyles}
                >
                    Notifications
                </NavLink>
            </Grid>
            <Grid container direction="column" item justify="flex-end" sm={4}>
                <Grid item>
                    <Typography>Logout</Typography>
                </Grid>
            </Grid>
        </Grid>

        //  Container for Profile Summary
    );
};

export default Drawer;
