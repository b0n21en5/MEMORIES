import React, { useState, useEffect} from "react";
import { Container,AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.jpg'
import Posts from './components/Posts/posts'
import Form from "./components/Form/form";
import {useDispatch} from 'react-redux';

import { getPosts } from './actions/posts';
import useStyles from "./styles";

const App = () =>{
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">MEMORIES</Typography>
                <img src={memories} className={classes.image} alt="MEMORIES" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>

                </Container>

            </Grow>
        </Container>
    );
}


export default App;