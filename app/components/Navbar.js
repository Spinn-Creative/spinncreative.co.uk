import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-3">
      <div>
        <Link href="/">
          <span className="logo font-bold text-white">Spinn Creative</span>
        </Link>
      </div>
    </nav>
  );
}
