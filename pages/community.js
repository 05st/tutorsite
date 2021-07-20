import Link from 'next/link';

export default function Community() {
  return (
    <div class="relative top-24 flex flex-col items-center space-y-24 p-6">
      <h1 class="text-2xl font-bold">To be announced</h1>
      <Link href="/">
        <a class="p-2 font-bold bg-blue-400 rounded text-white hover:bg-blue-500 hover:cursor-pointer">Back to Home</a>
      </Link>
    </div>
  );
}
