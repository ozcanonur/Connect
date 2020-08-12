import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';

const Hakkimizda = () => {
  const typoStyle = {
    padding: '5em',
  };

  return (
    <div style={{ padding: '10em' }}>
      <Grid container direction='column'>
        <Grid item md>
          <Grid container direction='row'>
            <Grid item xs={8}>
              <Typography variant='h3' style={{ paddingBottom: '2em' }}>
                Yepyeni dünyalara ilk adım bizimle.
              </Typography>
              <Typography variant='body1'>
                CONNECT YURTDIŞI EĞİTİM DANIŞMANLIĞI firması, eğitimini yurt dışında sürdürmek, yeni
                diller öğrenmek ve kendini geliştirmek isteyen yediden yetmişe her yaştan bireyin,
                dünyanın en seçkin dil okullarına, yaz okullarına, yaz kamplarına, üniversitelerin
                lisans, yüksek lisans ve sertifika programlarına katılımlarını sağlamayı amaç
                edinmiştir.
              </Typography>
              <Divider />
              <Typography variant='body1'>
                CONNECT, günümüzde yeni diller öğrenmenin ve yurt dışında eğitim almanın bireyin
                dünyasında yeni ufuklar açarak kariyerine katkı sağladığının bilinci ile, Dil,
                Sertifika, Değişim, Lisans ve Lisans Üstü programlarında eğitim danışmanlık hizmeti
                vermektedir.
              </Typography>
              <Divider />
              <Typography variant='body1'>
                CONNECT olarak, verilen eğitim hizmetinin ciddiyetinden ödün vermeden,
                katılımcılarımızın farklı ülkelerin kültürel zenginliklerini de deneyimlemelerini
                sağlamak amaçlarımız arasındadır.
              </Typography>
              <Divider />
              <Typography variant='body1'>
                CONNECT Kurucu ve danışmanları yirmibeş yıllık eğitim sektör deneyimleri ile
                yetinmeden günümüz okul, aile ve öğrencilerinin değişen ve gelişen koşullarını da
                gözönünde bulundurarak ve kendini sürekli yenileyerek hizmet sunmaya özen
                göstermektedir.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <div style={{ height: ' 30em', width: '20em', backgroundColor: 'red' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hakkimizda;
