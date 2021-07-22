import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Megatutors </title>
        <meta property="og:title" content="About | Megatutors" key="title"/>
      </Head>

      <div className="relative top-24 flex flex-col p-6 items-center">
        <div className="w-full md:w-1/2 flex flex-col space-y-2">
          <h1 className="text-4xl font-bold text-center">About</h1>
          <p><span className="pl-8">Megatutors</span> was created because of a few reasons. The most important reason is due to the world's lack of consistent, free, universal, unrestricted guided education and learning opportunities. Kids who struggle in school do not always have extra support available, whether that is due to cost, time, or location. In some countries around the world, children dream of having any education at all. Currently, Megatutors servers as a free service ran by ambitious highschool students to provide guided learning to anybody throughout the world. I envision Megatutors to become a platform enabling similar people with a passion for learning and teaching to be able to do the same.</p>
          <p className="font-bold">- S T</p>
        </div>
        <Link href="/">
          <a className="p-2 font-bold transition duration-150 bg-blue-400 rounded text-white hover:bg-blue-500 hover:cursor-pointer">Back to Home</a>
        </Link>
      </div>
    </>
  );
}

