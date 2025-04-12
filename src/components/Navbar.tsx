

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#home" className="hover:text-[var(--primary)] transition">Home</a></li>
        <li><a href="#services" className="hover:text-[var(--primary)] transition">Services</a></li>
        <li><a href="#portfolio" className="hover:text-[var(--primary)] transition">Portfolio</a></li>
        <li><a href="#testimonials" className="hover:text-[var(--primary)] transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-[var(--primary)] transition">Contact</a></li>
      </ul>
    </nav>
  )
}
