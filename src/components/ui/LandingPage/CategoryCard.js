import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      ...theme.button,
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    altButton: {
      ...theme.button,
      backgroundColor: 'black',
      color: 'white',
      height: '5em',
      width: '100%',
      opacity: '0.8',
    },
  };
});

const CategoryCard = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      spacing={3}
      style={{ boxShadow: '0px 0px 24px 4px rgba(0, 0, 0, 0.18)', padding: '2em' }}>
      <Grid item md style={{ textAlign: 'center' }}>
        <Button variant='contained' className={classes.altButton}>
          Yaz Okullari
          <ArrowRightAltIcon />
        </Button>
      </Grid>
      <Grid item md>
        <Typography variant='body1' style={{ textAlign: 'justify' }}>
          Yaz okulları, yoğun bir eğitim öğretim döneminin sonunda, öğrencilerin ana dilleri
          haricinde öğrenmek istedikleri bir dili yurtdışındaki yaz kamplarına katılarak
          öğrenebilecekleri bir fırsattır. Bu yaz kampları, öğrencilerin özgüvenlerinin
          gelişmesinde, sorumluluk sahibi olmalarında ve erken yaşta bir hedef belirlemeleri
          açısından çok etkilidir. Farklı ülkelerden gelecek öğrencilerle arkadaşlık edebilmeleri,
          farklı kültürleri tanıyabilmeleri ve bu insanlarla pratik yapabilmeleri, kişisel
          gelişimleri için son derece önemlidir.
        </Typography>
      </Grid>
      <Grid item md>
        <Grid container direction='row' justify='center'>
          <Grid item md style={{ textAlign: 'center' }}>
            <img src={require('./icons/uk.svg')} style={{ height: '3em' }} />
          </Grid>
          <Grid item md style={{ textAlign: 'center' }}>
            <img src={require('./icons/us.svg')} style={{ height: '3em' }} />
          </Grid>
          <Grid item md style={{ textAlign: 'center' }}>
            <img src={require('./icons/ger.svg')} style={{ height: '3em' }} />
          </Grid>
          <Grid item md style={{ textAlign: 'center' }}>
            <img src={require('./icons/uk.svg')} style={{ height: '3em' }} />
          </Grid>
          <Grid item md style={{ textAlign: 'center' }}>
            <img src={require('./icons/us.svg')} style={{ height: '3em' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryCard;
