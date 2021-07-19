import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1 class="text-xl font-bold">About</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}

