import React from 'react';
import useStyles from './styles';

const Dashboard = ({ userInfo }) => {
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <h1>This is your dashboard.</h1>
        <br/>
        <h2>Welcome, {userInfo ? userInfo.email : "User"}</h2>
    </main>
    );
}

export default Dashboard;