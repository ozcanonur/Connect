import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { items } from './Items';
import Carousel from 'react-material-ui-carousel';

const Ulke = ({ title, text, imgs }) => {
  return (
    <Grid container direction='row' spacing={5}>
      <Grid item md>
        <Carousel
          autoPlay={true}
          timer={500}
          animation={'fade'}
          indicatiors={true}
          navButtonsAlwaysVisible={true}>
          {imgs.map((img, key) => {
            return (
              <img
                key={key}
                style={{
                  height: '30em',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt='Landing'
                src={img}
              />
            );
          })}
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
        {items.map((item, key) => {
          return (
            <Grid item md key={key}>
              <Ulke title={item.title} text={item.text} imgs={item.imgs} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Ulkeler;
