import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>This is the Home Page of NCKU</h1>
      <p>Now use Travis CI to build test and deploy, fantastic</p>
    </div>
  );
}

export default Home
