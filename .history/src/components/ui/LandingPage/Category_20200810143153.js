import React from 'react';
import { Grid, Button } from '@material-ui/core';

const Category = ({ btnText, imgSrc }) => {
  return (
    <Grid container direction='column'>
      <Grid item md>
        <img className={classes.img} alt='Landing' src={require(`${imgSrc}`)} />
      </Grid>
      <Grid item md style={{ textAlign: 'center' }}>
        <Button className={classes.button}>`${btnText}`</Button>
      </Grid>
    </Grid>
  );
};

export default Category;
