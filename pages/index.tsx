import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import axios from "axios";
import { Gallery } from "../components/gallery";
import { Wallet } from "../components/wallet";
import { Token } from "../components/token";
import { TokenSingle } from "../components/token_single";
import { useKeplr } from "../hooks/useKeplr";

enum Pages {
  HOME = 'home',
  WALLET = 'wallet',
  TOKEN = 'TOKEN',
}

const Home: NextPage = () => {
  const [page, setPage] = useState<Pages>(Pages.HOME);
  const [token, setToken] = useState<string>('')

  const [keplr, loading]=useKeplr()

  useEffect(()=>{
    const query = new URLSearchParams(window.location.search)
    if(query.get('wallet')){
      setPage(Pages.WALLET)
    }else if(query.get('token')){
      const tokenId = parseInt(query.get('token')||'0')
      if(tokenId>0&&tokenId<=1024){
        setPage(Pages.TOKEN)
        setToken(tokenId.toString())
      }else{
        setPage(Pages.HOME)
      }
    }else {
      setPage(Pages.HOME)
    }
  },[])

  useEffect(()=>{

  }, [page])

  return (
    <div className={styles.container}>
      <Head>
        <title>Hyperion Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hyperion Gallery
        </h1>

        {page === Pages.WALLET? <Wallet /> : page===Pages.TOKEN?<TokenSingle tokenId={token}/>: <div >Please login</div>}


      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
