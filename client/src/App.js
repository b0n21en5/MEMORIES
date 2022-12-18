import React, { useEffect} from "react";
import { Container,AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.jpg'
import Posts from './components/Posts/posts'
import Form from "./components/Form/form";
import {useDispatch} from 'react-redux';

import { getPosts } from './actions/posts';
import useStyles from "./styles";

const App = () =>{

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div>
            <Container maxidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">MEMORIES</Typography>
                    <img src={memories} className={classes.image} alt="MEMORIES" height="60"/>
                </AppBar>
                <Grow in>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form/>
                        </Grid>

                    </Grid>
                </Grow>
            </Container>
        </div>
    );
}


export default App;