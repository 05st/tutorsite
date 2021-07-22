import Head from 'next/head';
import Link from 'next/link';

export default function Submitted() {
  return (
    <>
      <Head>
        <title>Megatutors - Submitted</title>
        <meta property="og:title" content="Megatutors - Submitted" key="title" />
      </Head>

     <div className="relative top-24 flex flex-col items-center space-y-24 p-6">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-2xl font-bold">Thank you!</h1>
          <p>Please check your email, you will receive a response within 24 hours.</p>
        </div>
        <Link href="/">
          <a className="p-2 transition duration-150 font-bold bg-blue-400 rounded text-white hover:bg-blue-500 hover:cursor-pointer">Back to Home</a>
        </Link>
      </div>
    </>
  );
}
