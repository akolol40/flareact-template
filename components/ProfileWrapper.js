import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { QRCode } from "react-qr-svg";


function ProfileWrapper(props) {
  const [profile, setProfile] = React.useState(false);
  const [error, setError] = React.useState('');
  const fullScreen = useMediaQuery(useTheme().breakpoints.down('xs'));

  React.useEffect(() => {
    setProfile({
      "_id": "603f6ac9f2e0a72e80215399",
      "eis": { "id": 2.9787227565628764e+28 },
      "ngmt": {
        "posts": 2,
        "offers": 1,
        "procedures": 0,
        "cmnts": 0,
        "likes": 0,
        "docs": 31,
        "subs": 2,
        "adms": 1,
        "bans": 0,
        "appld": 10,
        "appls": 0,
        "complts": 0,
        "unrelbl": false,
        "paid": 0
      },
      "status": 1,
      "t": false,
      "accss": 0,
      "rank": 1,
      "rep": "BB+",
      "tags": [],
      "locations": [],
      "followers": [{ "$oid": "60016d46f44d8e011c62909f" }, { "$oid": "60018e64f44d8e011c6290eb" }],
      "admins": [{ "$oid": "60016d46f44d8e011c62909f" }, { "$oid": "60018e64f44d8e011c6290eb" }],
      "complnrs": [],
      "bans": [],
      "full_name": "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"ВД ТЕХНОЛОГИИ\"",
      "name": "ООО \"Восток трейд\"",
      "inn": "5001137840",
      "kpp": "500101001",
      "ogrn": "1215000013590",
      "ogrnip": "",
      "okpo": "47189016",
      "okato": "46404000000",
      "legal_addr": "143909, Московская обл, г Балашиха, ул Советская, д 35, комн 309",
      "post_addr": "143909, Московская обл, г Балашиха, ул Советская, д 35, комн 309",
      "www": "https://vdlx.ru",
      "phone": "+7 (916) 166-75-15",
      "okveds": [],
      "date": { "$date": "2021-03-03T10:54:01.209Z" },
      "avtr": "#7bc862",
      "updated": { "$date": "2021-03-03T11:06:28.911Z" },
      "about": 'Национальная технологическая компания, основанная в 2021 г'
    })
  }, []);

  return (<Container maxWidth={fullScreen ? false : "xs"} disableGutters>
    <Paper square elevation={fullScreen ? 0 : 1} variant='outlined'
      style={{ marginTop: 25 }}>
      {!error
        ? profile && <div style={{ padding: 15 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            
            <div style={{ flex: 9 }}>
              <List disablePadding dense>
                <ListItem disableGutters style={{ padding: 0 }}>
                  <ListItemText secondary={profile.legal_addr.replace('undefined,', '')}
                    primary={profile.name} primaryTypographyProps={{
                      style: {
                        fontSize: 15, fontWeight: 600, lineHeight: 1.5
                      }
                    }} />
                </ListItem>
              </List>
            </div>
          </div>
          {profile.about && <div style={{ paddingTop: 10, fontSize: 14 }}>{profile.about}</div>}
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
            <div style={{ flex: 9 }}>
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Новости и блоги'} onClick={() => {}} />
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Товары и услуги'} onClick={() => {}} />
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Предложения для B2B'} onClick={() => {}} />
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Документы'} onClick={() => {}} />
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Контакты'} onClick={() => {}} />
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Команда (' + profile.ngmt.adms + ')'} onClick={() => {}} />
              <Chip size="small" style={{ margin: 2 }} variant="outlined" 
                label={'Подписчики (' + profile.ngmt.subs + ')'} onClick={() => {}} />
            </div>
            <div style={{ flex: 3, textAlign: 'right', paddingRight: 5 }}>
              <QRCode bgColor="#FFFFFF" fgColor="#000000" level="M"
                value={'https://agro360.ru/o/' + profile.alias} style={{
                  width: '69', maxWidth: '69', border: '5px solid #fff', outline: '3px solid #3b8dbc'
                }} />
            </div>
          </div>
          <Divider style={{ margin: '15px 0' }} light />
          <div style={{ display: 'flex', flexDirection: 'row', fontSize: 14, color: '#666' }}>
            <div style={{ flex: 5, textAlign: 'center' }}>
              Деловая активность: <span style={{ fontWeight: 500 }}>{profile.rank}</span>
            </div>
            <div style={{ flex: 5, textAlign: 'center' }}>
              Деловая репутация: <span style={{ fontWeight: 500 }}>{profile.rep}</span>
            </div>
          </div>
          <div style={{ paddingTop: 15 }}>
            <Chip size="small" style={{ margin: 2 }} label={'Сведения ФНС'}
              onClick={() => {}} />
            <Chip size="small" style={{ margin: 2 }} label={'Сведения Росстата'}
              onClick={() => {}} />
            <Chip size="small" style={{ margin: 2 }} label={'Сведения ФАС'}
              onClick={() => {}} />
            <Chip size="small" style={{ margin: 2 }} label={'Арбитражные дела'}
              onClick={() => {}} />
            <Chip size="small" style={{ margin: 2 }} label={'Сведения ФССП'}
              onClick={() => {}} />
            <Chip size="small" style={{ margin: 2 }} label={'Отзывы участников'}
              onClick={() => {}} />
          </div>

        </div>
        : <div style={{
          position: 'absolute', top: '45%', left: '50%',
          transform: 'translate(-50%, 0)', textAlign: 'center', color: 'red'
        }}>{error}</div>
      }
    </Paper>
  </Container>);
}

export default ProfileWrapper;