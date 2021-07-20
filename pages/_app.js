import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { useState } from 'react';

function NavButton(props) {
  return (
    <Link href={props.href}>
      <a class="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-blue-500 hover:text-white">
        {props.children}
      </a>
    </Link>
  );
}

function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <nav class="fixed z-20 w-full flex items-center bg-blue-400 p-2 flex-wrap shadow">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous" />
      <div class="p-2 mr-4 inline-flex items-center">
        <Link href="/">
          <a class="text-xl text-white font-bold uppercase tracking-wide">
            Megatutors
          </a>
        </Link>
      </div>
      <button class="text-white inline-flex p-3 hover:bg-blue-500 rounded md:hidden ml-auto hover:text-white outline-none" onClick={() => setActive(!active)}>
        <i class="material-icons">menu</i>
      </button>
      <div class={`${ active ? "" : "hidden" } top-navbar w-full md:inline-flex md:flex-grow md:w-auto`}>
        <div class="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
          <NavButton href="/">Home</NavButton>
          <NavButton href="/about">About</NavButton>
          <NavButton href="/booking">Booking</NavButton>
          <NavButton href="/community">Community</NavButton>
        </div>
      </div>
    </nav>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

