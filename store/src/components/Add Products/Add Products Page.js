import React from 'react';
import useStyles from './styles';

const AddPPage = () => {
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <h1>Add Products</h1>
    </main>
    );
}

export default AddPPage;