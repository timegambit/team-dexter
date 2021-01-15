import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// Custom component imports
import UserInfo from '../components/Profile/UserInfo';
import Courses from '../components/Profile/Courses';
import Settings from '../components/Profile/Settings';
import Notifications from '../components/Profile/Notifications';
import Drawer from '../components/Profile/Drawer';

const useStyles = makeStyles({
    container: {
        display: 'flex',
    },
});

const Profile = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Drawer className={classes.container} />
            {/* Display current route container */}

            <Grid container style={{ height: '100vh', background: 'grey' }}>
                <Switch>
                    <Route path='/profile/' exact component={UserInfo} />
                    <Route path='/profile/courses' component={Courses} />
                    <Route path='/profile/settings' component={Settings} />
                    <Route path='/profile/notifications' component={Notifications} />
                </Switch>
            </Grid>
        </div>
    );
};

export default Profile;
