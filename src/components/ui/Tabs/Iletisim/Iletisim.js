import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Map from './Map';
import Carousel from 'react-material-ui-carousel';

const Iletisim = () => {
  return (
    <div style={{ padding: '10em', paddingBottom: '5em' }}>
      <Grid container direction='column' spacing={10}>
        <Grid item md>
          <Typography variant='h3' style={{ paddingBottom: '1em' }}>
            Ofisimiz
          </Typography>
          <Typography variant='body1'>
            Barbaros Mahallesi, Sarkaç Sokak, Ağaoğlu My Prestige Plaza, No:1 Daire:94, Ataşehir,
            İstanbul
          </Typography>
          <br />
          <Typography variant='body1'>
            Telefon: <strong>+90 216 688 64 46</strong>
            <br />
            Faks: <strong>+90 216 688 64 47</strong>
            <br />
            E-mail: <strong>info@connectistanbul.com</strong>
          </Typography>
        </Grid>
        <Grid item md>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h3' style={{ paddingBottom: '1em' }}>
                Bize ulasin
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction='row' spacing={5}>
                <Grid item md>
                  <Map />
                </Grid>
                <Grid item md>
                  <Carousel
                    autoPlay={true}
                    timer={400}
                    animation={'fade'}
                    indicators={true}
                    navButtonsAlwaysVisible={true}>
                    <img
                      src={require('./prestige.jpg')}
                      style={{ objectFit: 'cover', width: '100%', height: '30em' }}
                    />
                    <img
                      src={require('./office.png')}
                      style={{ objectFit: 'cover', width: '100%', height: '30em' }}
                    />
                  </Carousel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Iletisim;
