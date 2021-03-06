import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Hakkimizda = () => {
  const typoStyle = {
    padding: '1em 1em 1em 0em',
  };

  const bottomListTexts = [
    'Öğrencinin, velinin ve okulun ihtiyacının belirlenmesi,',
    'Öğrenci ve okul için uygun olan kurumun tespit edilmesi,',
    'Öğrencinin kurum, konaklama, ulaşım, yemek, vize gibi konularda bilgilendirilmesi ve seçeneklerin sunulması,',
    'Vize belgelerinin toplanması,',
    'Konsolosluk vize randevusunun alınması,',
    'Gerekli yazışmaların yapılması,',
    'Uçak biletinin temin edilmesi,',
    'Seyahat ve sağlık sigortasının yapılması,',
    'Eğitimin başlangıcından sonuna her an destek olacak bir refakatçinin sağlanması,',
    'Eğitim boyunca ülkenin kültürünü tanımak, uluslararası arkadaşlıkları pekiştirmek ve pratik yapabilmek için çeşitli gezi programlarının hazırlanması.',
  ];

  return (
    <div style={{ padding: '10em', paddingTop: '5em' }}>
      <Grid container direction='column'>
        <Grid item md>
          <Grid container direction='row' spacing={5}>
            <Grid item xs={8}>
              <Typography variant='h3' style={{ paddingBottom: '1em' }}>
                Yepyeni dünyalara ilk adım bizimle.
              </Typography>
              <Typography variant='body1' style={typoStyle}>
                CONNECT YURTDIŞI EĞİTİM DANIŞMANLIĞI firması, eğitimini yurt dışında sürdürmek, yeni
                diller öğrenmek ve kendini geliştirmek isteyen yediden yetmişe her yaştan bireyin,
                dünyanın en seçkin dil okullarına, yaz okullarına, yaz kamplarına, üniversitelerin
                lisans, yüksek lisans ve sertifika programlarına katılımlarını sağlamayı amaç
                edinmiştir.
              </Typography>
              <Typography variant='body1' style={typoStyle}>
                CONNECT, günümüzde yeni diller öğrenmenin ve yurt dışında eğitim almanın bireyin
                dünyasında yeni ufuklar açarak kariyerine katkı sağladığının bilinci ile, Dil,
                Sertifika, Değişim, Lisans ve Lisans Üstü programlarında eğitim danışmanlık hizmeti
                vermektedir.
              </Typography>
              <Typography variant='body1' style={typoStyle}>
                CONNECT olarak, verilen eğitim hizmetinin ciddiyetinden ödün vermeden,
                katılımcılarımızın farklı ülkelerin kültürel zenginliklerini de deneyimlemelerini
                sağlamak amaçlarımız arasındadır.
              </Typography>
              <Typography variant='body1' style={typoStyle}>
                CONNECT Kurucu ve danışmanları yirmibeş yıllık eğitim sektör deneyimleri ile
                yetinmeden günümüz okul, aile ve öğrencilerinin değişen ve gelişen koşullarını da
                gözönünde bulundurarak ve kendini sürekli yenileyerek hizmet sunmaya özen
                göstermektedir.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                style={{
                  height: '40em',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt='Aynur Ozcan'
                src={require('./aynur.jpg')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md>
          <Typography variant='h3'>
            “Dünyaya açılan pencereniz olmak, başarımızın göstergesidir.”
          </Typography>
          <Typography variant='body1' style={{ marginTop: '7em' }}>
            Danışmanlık hizmetlerimizin kapsamı:
          </Typography>
          <br />
          <List>
            {bottomListTexts.map((text, key) => {
              return (
                <ListItem key={key}>
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant='body1'>{text}</Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Divider />
        <Grid item md style={{ marginTop: '5em' }}>
          <Typography variant='body1' style={{ fontWeight: '1000' }}>
            Aynur Elvan Özcan
          </Typography>
          <Typography variant='body1'>Kurucu, Ingilizce Ogretmeni</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hakkimizda;
