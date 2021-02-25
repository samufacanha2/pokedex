import Head from 'next/head'
import Link from 'next/link';
import Dashboard from '../components/Dashboard'
import PokemonCard from '../components/PokemonCard'

export default function Gen() {

  return (
    <div>
    <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/Pokeball.svg" />
    </Head>

    <div id="__next">
    <Link href="/"><h1 className="text-center text-6xl items-start cursor-pointer">  Poké<span className="text-red-600">dex</span> </h1></Link>
        <Dashboard/>
      </div>
    </div>
  )
}
