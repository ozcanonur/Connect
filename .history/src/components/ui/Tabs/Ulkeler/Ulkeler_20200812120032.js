import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { items } from './Items';

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

const Ulkeler = () => {
  return (
    <div style={{ padding: '10em' }}>
      <Grid container direction='column' spacing={5}>
        {items.map((item) => {
          return (
            <Grid item md>
              <Ulke text={item.text} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Ulkeler;
