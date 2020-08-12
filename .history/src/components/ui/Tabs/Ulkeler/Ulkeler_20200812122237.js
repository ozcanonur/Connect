import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { items } from './Items';
import Carousel from 'react-material-ui-carousel';

const Ulke = ({ title, text, img }) => {
  return (
    <Grid container direction='row' justify='center' spacing={5}>
      <Grid item md>
        <Carousel
          autoPlay={true}
          timer={400}
          animation={'fade'}
          indicatiors={true}
          navButtonsAlwaysVisible={true}>
          <div style={{ height: '500px', width: '700px', backgroundColor: 'red' }} />
          <div style={{ height: '500px', width: '700px', backgroundColor: 'blue' }} />
        </Carousel>
      </Grid>
      <Grid item md>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='body1' style={{ marginTop: '1em' }}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

const Ulkeler = () => {
  return (
    <div style={{ padding: '10em' }}>
      <Typography variant='h1' style={{ textAlign: 'center', paddingBottom: '1em' }}>
        Ulkeler
      </Typography>
      <Grid container direction='column' spacing={5}>
        {items.map((item) => {
          return (
            <Grid item md>
              <Ulke title={item.title} text={item.text} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Ulkeler;
