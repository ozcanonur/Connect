import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Ulkeler = () => {
  return (
    <Grid container direction='column'>
      <Grid item md>
        <Grid container direction='row'>
          <Grid item md>
            <div style={{ height: '700px', width: '500px', backgroundColor: 'red' }} />
          </Grid>
          <Grid item md>
            <Typography variant='body1'>
              Öğrenciler tarafından en çok tercih edilen ülke olan İngiltere, sizlere her seviye ve
              türden eğitimi en iyi koşullarda sunuyor! Londra, Cambridge, Oxford, Canterbury ve
              Bournemouth gibi bir çok şehirde özellikle dil okulu ve yaz kamplarıyla her yaştan
              insanı kendine çeken bu ülkede alacağınız eğitim, İngilizce seviyenizi geliştirmenin
              yanı sıra, sizleri hayatınızın geri kalanındaki akademik ve profesyonel tecrübeleriniz
              için hazırlayacaktır. Bu yurt dışı tecrübesini deneyimlemek için CONNECT ailesi ile
              görüşmeye davetlisiniz!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Ulkeler;
