import Head from 'next/head';
import Link from 'next/link';

export default function Community() {
  return (
    <>
      <Head>
        <title>Megatutors - Community</title>
        <meta property="og:title" content="Megatutors - Community" key="title" />
      </Head>

      <div className="relative top-24 flex flex-col items-center space-y-24 p-6">
        <h1 className="text-2xl font-bold">To be announced</h1>
        <Link href="/">
          <a className="p-2 transition duration-150 font-bold bg-blue-400 rounded text-white hover:bg-blue-500 hover:cursor-pointer">Back to Home</a>
        </Link>
      </div>
    </>
  );
}
