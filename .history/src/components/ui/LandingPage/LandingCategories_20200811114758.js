import React from 'react';

import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Category from './Category';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
    placeholderDiv: {
      height: '300px',
      width: '300px',
      backgroundColor: 'red',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };
});

const LandingCategories = () => {
  const classes = useStyles();

  const firstRow = [
    { imgSrc: require('../../../assets/1_1.jpg'), btnText: 'Yaz Okullari' },
    { imgSrc: require('../../../assets/1_2.jpg'), btnText: 'Dil Okullari' },
    { imgSrc: require('../../../assets/1_3.jpg'), btnText: '50+ Programlar' },
  ];
  const secondRow = [
    { imgSrc: require('../../../assets/2_1.jpg'), btnText: 'CELTA' },
    { imgSrc: require('../../../assets/2_2.jpg'), btnText: 'Lise Degisim' },
  ];
  const thirdRow = [
    { imgSrc: require('../../../assets/3_1.jpg'), btnText: 'Lisans' },
    { imgSrc: require('../../../assets/3_2.jpg'), btnText: 'Lisansustu' },
    { imgSrc: require('../../../assets/3_3.jpg'), btnText: 'Galeri' },
  ];

  return (
    <Grid container direction='column'>
      <Grid item md style={{ textAlign: 'center' }}>
        <Grid container direction='column' style={{ padding: '3em' }}>
          <Grid item>
            <Typography variant='h2'>Yurtdisina acilan kapiniz.</Typography>
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <Button variant='contained' className={classes.button}>
              Vizyonumuz
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md>
        <Grid container direction='row' justify='space-evenly' spacing={2}>
          {firstRow.map(({ imgSrc, btnText }, key) => (
            <Grid item md key={key}>
              <Category imgSrc={imgSrc} btnText={btnText} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md>
        <Grid container direction='row' justify='space-evenly' spacing={2}>
          {secondRow.map(({ imgSrc, btnText }, key) => (
            <Grid item md key={key}>
              <Category imgSrc={imgSrc} btnText={btnText} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md>
        <Grid container direction='row' justify='space-evenly' spacing={2}>
          {thirdRow.map(({ imgSrc, btnText }, key) => (
            <Grid item md key={key}>
              <Category imgSrc={imgSrc} btnText={btnText} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingCategories;
