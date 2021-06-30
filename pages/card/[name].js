import ProfileWrapper from "../../components/ProfileWrapper";
import Head from "flareact/head";
export async function getEdgeProps({ params }) {
  const { name } = params;
  return {
    props: {
      name,
      description: 'I just finished the first @masseffect. I love game and can’t wait to jump into Mass Effect 2. Thank you @bioware @CaseyDHudson @DrewKarpyshyn and so many others for making this game. ❤️#platinumtrophy',
      urimg: 'https://pbs.twimg.com/media/E2GqwPhWUAAwxqT?format=jpg&name=small'
    },
  };
}
export default function Post({ name, description, urimg }) {
  console.log('client', name)
   return <>
    <Head>
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
    </Head>
   <ProfileWrapper/>
   </>
}
