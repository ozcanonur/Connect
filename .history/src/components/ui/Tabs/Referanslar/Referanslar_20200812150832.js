import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Items } from './Items';

const Referans = ({ title, img, paragraphs }) => {
  return (
    <Grid container direction='row'>
      <Grid item xs={3}>
        <img style={{}} alt={title} src={img} />
      </Grid>
      <Grid item xs={9} style={{ textAlign: 'justify' }}>
        {paragraphs.map((p, key) => (
          <Typography
            variant='body1'
            key={key}
            style={{ fontWeight: '1000', paddingBottom: '1em' }}>
            {p}
          </Typography>
        ))}
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
      <Grid container direction='column' spacing={7}>
        {Items.map((item, key) => {
          return (
            <Grid item md key={key}>
              <Referans title={item.title} img={item.img} paragraphs={item.paragraphs} />{' '}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Referanslar;
