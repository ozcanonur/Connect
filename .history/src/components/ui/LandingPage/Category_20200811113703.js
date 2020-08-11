import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      ...theme.button,
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };
});

const Category = ({ btnText, imgSrc }) => {
  const classes = useStyles();

  return (
    <Grid container direction='column' spacing={2} style={{ position: 'relative' }}>
      <Grid item md>
        <img className={classes.img} alt='Landing' src={imgSrc} />
      </Grid>
      <Grid item md style={{ textAlign: 'center', position: 'absolute' }}>
        <Button variant='contained' className={classes.button}>
          {btnText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Category;
