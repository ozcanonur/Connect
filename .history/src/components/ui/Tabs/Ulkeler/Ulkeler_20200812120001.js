import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Ulke from './Ulke';
import { items } from './Items';

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
