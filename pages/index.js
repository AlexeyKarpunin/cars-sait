import Head from 'next/head'
import Header from '../components/Header';
import Ask from '../components/Ask';
import Goods from '../components/goods/Goods'

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Ask />
      <Goods />
    </>
  )
}
