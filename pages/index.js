import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function SubjectListing(props) {
  return (
    <div class="w-full h-auto flex flex-row items-center space-x-4">
      <img class="w-16 h-full" src={props.img} alt={props.name}/>
      <div class="h-full flex flex-col">
        <p class="font-bold">{props.name}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div class="relative p-6 top-24 flex flex-col items-center space-y-24">
      <div class="flex flex-col items-center space-y-2">
        <h1 class="font-bold text-4xl text-center">Free tutoring, for everyone.</h1>
        <p class="text-center">Tutoring should be available for free to everybody who wants it. Learning should be unrestricted.</p>
      </div>
      
      <div class="rounded-lg bg-gray-50 p-4 w-full md:w-1/2 flex flex-col items-center space-y-4 shadow">
        <h2 class="font-bold text-3xl">We cover</h2>
        <SubjectListing img="/images/math.png" name="Math" desc="All the way to AP Calculus, and some basic discrete math." />
        <SubjectListing img="/images/science.png" name="Science" desc="Everything up to highschool physics, chemistry, and biology." />
        <SubjectListing img="/images/cs.png" name="Computer Science" desc="Everything" />
      </div>

      <h2 class="text-2xl text-center">
        <Link href="/booking"><a class="font-bold">Booking</a></Link> takes less than five minutes. Even better, <Link href="/community"><a class="font-bold">join our community</a></Link>.
      </h2>
      
      <div class="bg-gray-100 p-4 w-auto flex flex-col items-center space-y-4 shadow">
        <h2 class="font-bold text-xl">Have a question?</h2>
        <form class="flex flex-col items-center space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <input class="p-2 shadow-inner" type="text" placeholder="Name"/>
            <input class="p-2 shadow-inner" type="text" placeholder="email@address.tld"/>
          </div>
          <textarea class="p-2 shadow-inner w-full h-full" placeholder="Ask your question here"/>
          <input class="p-2 bg-blue-400 hover:bg-blue-500 hover:cursor-pointer rounded text-white font-bold min-w-min w-1/4" type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
}

