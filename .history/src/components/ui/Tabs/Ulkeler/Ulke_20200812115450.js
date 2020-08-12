import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Ulke = ({ img, text }) => {
  return (
    <Grid container direction='row' justify='center'>
      <Grid item md>
        <div style={{ height: '500px', width: '700px', backgroundColor: 'red' }} />
      </Grid>
      <Grid item md>
        <Typography variant='body1'>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Ulke;
