import Head from 'next/head';

import StartWindow from '../components/startWindow';
import { NextPage } from 'next';
import GallerySlider from '../components/gallerySlider';
import Details from '../components/details';
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>B.N.O</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

        <StartWindow />
        <GallerySlider />
        <Details />
        <Footer/>
    </>
  );
};

export default Home;
