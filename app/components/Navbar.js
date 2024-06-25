import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-3">
      <div>
        <Link href="/">
          <span className="full-name font-bold uppercase text-black">Spinn Creative</span>
        </Link>
      </div>
    </nav>
  );
}
