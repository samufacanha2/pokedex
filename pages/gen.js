import Head from 'next/head'
import Link from 'next/link';
import Dashboard from '../components/Dashboard'
import PokemonCard from '../components/PokemonCard'

export default function Gen(props) {

  console.log(props)

  return (
    <div>
    <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/Pokeball.svg" />
    </Head>

    <div id="__next">
    <Link href="/"><h1 className="text-center text-6xl items-start cursor-pointer">  Poké<span className="text-red-600">dex</span> </h1></Link>
        <Dashboard url={`https://pokeapi.co/api/v2/pokemon?limit=${props.limit}&offset=${props.offset}`}  />
      </div>
    </div>
  )
}

export async function getServerSideProps({query}){
  const limit = query.limit;
  const offset = query.offset;

  return {props:{limit, offset}};
}