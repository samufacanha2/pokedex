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
          <Link href='/gen?limit=151&offset=0'>
              <a className="card">
                <h3>First Gen</h3>
                <p>#1 - #151</p>
              </a>
            </Link>
            <Link href="/gen?limit=100&offset=151"> 
              <a className="card">
                <h3>Second Gen</h3>
                <p>#152 - #251</p>
              </a>
            </Link>
            <Link href="/gen?limit=135&offset=251"> 
              <a className="card">
                <h3>Third Gen</h3>
                <p>#252 - #386</p>
              </a>
            </Link>
            <Link href="/gen?limit=108&offset=386"> 
              <a className="card">
                <h3>Fourth Gen</h3>
                <p>#387 - #494</p>
              </a>
            </Link>
            <Link href="/gen?limit=156&offset=494"> 
              <a className="card">
                <h3>Fifth Gen</h3>
                <p>#495 - #649</p>
              </a>
            </Link>
            <Link href="/gen?limit=72&offset=649"> 
              <a className="card">
                <h3>Sixth Gen</h3>
                <p>#650 - #721</p>
              </a>
            </Link>
            <Link href="/gen?limit=88&offset=721"> 
              <a className="card">
                <h3>Seventh Gen</h3>
                <p>#722 - #809</p>
              </a>
            </Link>
            <Link href="/gen?limit=89&offset=809"> 
              <a className="card">
                <h3>Eighth Gen</h3>
                <p>#810 - #898</p>
              </a>
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
