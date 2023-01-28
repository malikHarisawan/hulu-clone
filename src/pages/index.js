import Header from '../../components/Header'
import Head from 'next/head'
import requests from '../../utils/requests'
import Nav from '../../components/Nav'
import Results from 'components/Results'

export default function Home({results}) {
    console.log(results)
  return (
    <>
      <Head>
        <title>hulu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="next.svg" />
      </Head>
      <Header/>
      <Nav/>
      <Results results={results} />
    
    </>
  );

}
export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }`
    ).then((res) => res.json());
  
    return {
      props: {
        results: request.results,
      },
    };
  }
  
