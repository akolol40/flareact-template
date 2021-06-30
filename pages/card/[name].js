import ProfileWrapper from "../../components/ProfileWrapper";
import Head from "flareact/head";
import Error404 from '../../components/Error404'
import decode from 'urldecode'
export async function getEdgeProps({ params }) {
  const { name } = params;
 
  const staticFetch = {
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
  }
  let isEmpty = false
  
  if ((staticFetch.name === undefined) || (staticFetch.name !== decode(name))) 
    isEmpty = true

  
  return {
    props: {
      name: staticFetch.name,
      description: staticFetch.about +'\n ИНН:' + staticFetch.inn + '\n КПП: ' + staticFetch.kpp,
      urimg: 'https://pbs.twimg.com/media/E2GqwPhWUAAwxqT?format=jpg&name=small',
      isEmpty
    },
  };
}
export default function Post({ name, description, urimg, isEmpty }) {
  name = (decodeURI(name))
   return <>
   {isEmpty===false && <Head>
        <title>{name}</title>

        <meta name="keywords" content='apknavigator' />
        <meta name="description" content={description}/> 
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:site_name" content="APKNAV" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={name}/>
        <meta property="og:image" content={urimg}/>
        <meta property="og:description" content={description}/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={urimg} />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="600" />
    </Head>}
   {isEmpty===false&&<ProfileWrapper/>}
   {isEmpty && <Error404/>}
   </>
}
