import React from 'react';
import { Grid, Button } from '@material-ui/core';

const Category = ({ btnText, imgSrc }) => {
  return (
    <Grid container direction='column'>
      <Grid item md>
        <img className={classes.img} alt='Landing' src={require('../../../assets/1_1.jpg')} />
      </Grid>
      <Grid item md style={{ textAlign: 'center' }}>
        <Button className={classes.button}>Yaz okullari</Button>
      </Grid>
    </Grid>
  );
};

export default Category;
