import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Items } from './Items';

const Referans = ({ title, img, text }) => {
  return (
    <Grid container direction='row'>
      <Grid item xs={3}>
        <img style={{}} alt={title} src={img} />
      </Grid>
      <Grid item xs={9}>
        <Typography variant='body1'>{text}</Typography>
      </Grid>
    </Grid>
  );
};

const Referanslar = () => {
  return (
    <div style={{ padding: '10em', paddingTop: '5em' }}>
      <Typography variant='h1' style={{ textAlign: 'center', paddingBottom: '1em' }}>
        Referanslar
      </Typography>
      <Grid container direction='column'>
        {Items.map((item, key) => {
          return (
            <Grid item md key={key}>
              <Referans title={item.title} img={item.img} text={item.text} />{' '}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Referanslar;
