export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-30 py-8 text-center text-white mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">
          Spinn<span className="text-[var(--primary)]">Creative</span>
        </a>
        <p className="text-sm">© 2025 Spinn Creative. All rights reserved.</p>
      </div>
    </footer>
  );
}
