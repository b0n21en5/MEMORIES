import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Grow } from "@material-ui/core";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/posts";
import Form from "../Form/form";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
