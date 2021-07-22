import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function SubjectListing(props) {
  return (
    <div className="w-full h-auto flex flex-row items-center space-x-4">
      <img className="w-16 h-full" src={props.img} alt={props.name}/>
      <div className="h-full flex flex-col">
        <p className="font-bold">{props.name}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

const API_URL = "https://inquiry.megatutors.workers.dev/"

export default function Home() {
  return (
    <>
      <Head>
        <title>Megatutors</title>
        <meta property="og:title" content="Megatutors" key="title"/>
      </Head>

      <div className="relative p-6 top-24 flex flex-col items-center space-y-24">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="font-bold text-4xl text-center">Free tutoring, for everyone.</h1>
          <p className="text-center">Tutoring should be available for free to everybody who wants it. Learning should be unrestricted.</p>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col items-center space-y-4 shadow">
          <h2 className="font-bold text-3xl">We cover</h2>
          <SubjectListing img="/images/math.png" name="Math" desc="All the way to AP Calculus, and some basic discrete math." />
          <SubjectListing img="/images/science.png" name="Science" desc="Everything up to highschool physics, chemistry, and biology." />
          <SubjectListing img="/images/cs.png" name="Computer Science" desc="Everything up to and including university / undergraduate level." />
        </div>

        <h2 className="text-2xl text-center">
          <Link href="/booking"><a className="font-bold hover:underline">Booking</a></Link> takes less than five minutes. Even better, <Link href="/community"><a className="font-bold hover:underline">join our community</a></Link>.
        </h2>
        
        <div className="bg-gray-100 p-4 w-auto flex flex-col items-center space-y-4 shadow">
          <h2 className="font-bold text-xl">Have a question?</h2>
          <form action={API_URL} method="POST" className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input required className="p-2 shadow-inner" type="text" name="name" placeholder="Name"/>
              <input required className="p-2 shadow-inner" type="text" name="email" placeholder="email@address.tld"/>
            </div>
            <textarea required className="p-2 shadow-inner w-full h-full" name="content" placeholder="Ask your question here"/>
            <input className="p-2 bg-blue-400 transition duration-150 hover:bg-blue-500 hover:cursor-pointer rounded text-white font-bold min-w-min w-1/4" type="submit" value="Submit"/>
          </form>
        </div>
        <p className="text-center text-sm text-gray-400">If you're looking to become a tutor, fill out the form above. We will have tutor applications available soon.</p>
      </div>
    </>
  );
}

