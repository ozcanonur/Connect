import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      border: '2px solid black',
      color: '#000000',
      backgroundColor: 'transparent',
      transition: '0.1s background-color linear, 0.1s color linear',
      padding: '1em 1em',
      fontWeight: '1000',
      letterSpacing: '0.2em',
      fontFamily: 'Raleway',
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
    <Grid container direction='column'>
      <Grid item md>
        <img className={classes.img} alt='Landing' src={imgSrc} />
      </Grid>
      <Grid item md style={{ textAlign: 'center' }}>
        <Button variant='contained' className={classes.button}>
          {btnText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Category;
