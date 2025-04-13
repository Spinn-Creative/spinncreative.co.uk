export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-30 py-8 text-center text-black mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="mb-4 md:mb-0">
          <img
            src="/images/logo-transparent.png"
            alt="Spinn Creative"
            className="h-8 md:h-10 object-contain"
          />
        </a>
        <p className="text-sm">
          © 2025 <strong>Spinn Creative</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
