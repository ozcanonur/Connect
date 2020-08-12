import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Ulkeler = () => {
  return (
    <div>
      <Grid container direction='column' spacing={5}>
        <Grid item md>
          <Grid container direction='row' justify='center'>
            <Grid item md>
              <div style={{ height: '500px', width: '700px', backgroundColor: 'red' }} />
            </Grid>
            <Grid item md>
              <Typography variant='body1'>
                Öğrenciler tarafından en çok tercih edilen ülke olan İngiltere, sizlere her seviye
                ve türden eğitimi en iyi koşullarda sunuyor! Londra, Cambridge, Oxford, Canterbury
                ve Bournemouth gibi bir çok şehirde özellikle dil okulu ve yaz kamplarıyla her
                yaştan insanı kendine çeken bu ülkede alacağınız eğitim, İngilizce seviyenizi
                geliştirmenin yanı sıra, sizleri hayatınızın geri kalanındaki akademik ve
                profesyonel tecrübeleriniz için hazırlayacaktır. Bu yurt dışı tecrübesini
                deneyimlemek için CONNECT ailesi ile görüşmeye davetlisiniz!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md>
          <Grid container direction='row'>
            <Grid item md>
              <div style={{ height: '500px', width: '700px', backgroundColor: 'red' }} />
            </Grid>
            <Grid item md>
              <Typography variant='body1'>
                Öğrenciler tarafından en çok tercih edilen ülke olan İngiltere, sizlere her seviye
                ve türden eğitimi en iyi koşullarda sunuyor! Londra, Cambridge, Oxford, Canterbury
                ve Bournemouth gibi bir çok şehirde özellikle dil okulu ve yaz kamplarıyla her
                yaştan insanı kendine çeken bu ülkede alacağınız eğitim, İngilizce seviyenizi
                geliştirmenin yanı sıra, sizleri hayatınızın geri kalanındaki akademik ve
                profesyonel tecrübeleriniz için hazırlayacaktır. Bu yurt dışı tecrübesini
                deneyimlemek için CONNECT ailesi ile görüşmeye davetlisiniz!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ulkeler;
