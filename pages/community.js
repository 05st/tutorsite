import Head from 'next/head';
import Link from 'next/link';

export default function Community() {
  return (
    <>
      <Head>
        <title>Community | Megatutors</title>
        <meta property="og:title" content="Community | Megatutors" key="title" />
      </Head>

      <div className="relative top-24 flex flex-col items-center space-y-24 p-6">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="font-bold text-4xl text-center">Join the community</h1>
          <p className="text-center">The community Discord server is meant to be a place for students, parents or guardians, and others who value education to interact with similar people. See you there!</p>
        </div>
        <iframe src="https://discord.com/widget?id=866810591757729793&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <div className="flex flex-row space-x-2">
          <a href="https://discord.gg/wQrQ3A2rhs" target="_blank" className="p-2 transition duration-150 font-bold bg-indigo-400 hover:bg-indigo-500 rounded text-white hover:cursor-pointer">Join Discord</a>
          <Link href="/">
            <a className="p-2 transition duration-150 font-bold bg-blue-400 rounded text-white hover:bg-blue-500 hover:cursor-pointer">Back to Home</a>
          </Link>
        </div>
      </div>
    </>
  );
}
