export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg opacity-80">What our clients say about working with us</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white bg-opacity-5 p-10 rounded-2xl text-center fade-in">
          <img
            src="/images/sarah-johnson.jpeg"
            alt="Client"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[var(--primary)] object-cover"
          />
          <h4 className="text-lg font-semibold">Sarah Johnson</h4>
          <p className="text-[var(--primary)] text-sm mb-3">Marketing Director, TechFuture</p>
          <div className="star-rating text-yellow-400 text-xl mb-4">★★★★★</div>
          <p className="italic leading-relaxed text-white/80">
            "Working with Spinn Creative transformed our brand identity. Their motion graphics and
            3D animations gave us exactly the modern, innovative look we were after. The team was
            responsive, creative, and delivered on time."
          </p>
        </div>
      </div>
    </section>
  );
}
