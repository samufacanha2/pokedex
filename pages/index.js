import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
    <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/Pokeball.svg" />
    </Head>

    <div id="__next">
      <div className="container">
        <h1 className="text-center text-6xl"> Poké<span className="text-red-600">dex</span></h1>
        <h2 className="text-center text-4xl mt-8">Choose a Generation:</h2>
        <div id="GridM">
          <Link href="/gen1">
              <a className="card">
                <h3>First Gen</h3>
                <p>1 - 151</p>
              </a>
            </Link>
            <Link href="#"> 
              <a className="card">
                <h3>Second Gen</h3>
                <p>152 - ?</p>
              </a>
            </Link>
            <Link href="#"> 
              <a className="card">
                <h3>Third Gen</h3>
                <p>? - ?</p>
              </a>
            </Link>
            <Link href="#"> 
              <a className="card">
                <h3>Fourth Gen</h3>
                <p>? - ?</p>
              </a>
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
