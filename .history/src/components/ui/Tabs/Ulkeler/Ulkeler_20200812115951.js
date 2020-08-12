import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Ulke from './Ulke';
import { Items } from './Items';

const Ulkeler = () => {
  return (
    <div style={{ padding: '10em' }}>
      <Grid container direction='column' spacing={5}>
        {Items.map((item) => {
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
