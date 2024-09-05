export default function AboutUs(): JSX.Element {
    return (
        <div>
            {/* Hero Section */}
            <section className="about-us-hero flex items-center justify-center text-center">
                <div className="about-us-hero-overlay">
                    <h1 className="text-6xl font-bold text-white">About Us</h1>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="about-us-section-container">
                <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
                <p className="text-lg mb-6">
                    At Spinn Creative, creativity is our driving force. Founded
                    on the belief that design should not only be beautiful but
                    also impactful, we have built a team of passionate
                    designers, animators, and brand strategists dedicated to
                    pushing the boundaries of visual storytelling.
                </p>
                <p className="text-lg mb-6">
                    With years of experience across various industries, we
                    combine artistic vision with technical expertise to deliver
                    innovative solutions tailored to each client’s unique needs.
                    From initial concept to final execution, we are committed to
                    crafting designs that not only capture attention but also
                    communicate your brand’s message clearly and effectively.
                </p>
            </section>

            {/* Our Mission Section */}
            <section className="about-us-section-container">
                <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6">
                    To empower brands with distinctive, compelling visuals that
                    speak to their audiences and set them apart in a competitive
                    landscape.
                </p>
            </section>

            {/* Why Choose Us Section */}
            <section className="about-us-section-container">
                <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="text-lg mb-6 list-disc pl-5">
                    <li className="mb-2">
                        <strong>Creative Expertise:</strong> A talented team of
                        specialists in graphic design, branding, 3D design, and
                        animation.
                    </li>
                    <li className="mb-2">
                        <strong>Collaborative Approach:</strong> We work closely
                        with you to ensure your vision is realized in every
                        detail.
                    </li>
                    <li className="mb-2">
                        <strong>Innovation & Quality:</strong> Cutting-edge
                        technology and innovative thinking are at the heart of
                        everything we do.
                    </li>
                </ul>
            </section>

            {/* Let’s Work Together Section */}
            <section className="about-us-section-container">
                <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
                <p className="text-lg mb-6">
                    Whether you're a startup looking for a complete brand
                    identity or an established business in need of a design
                    refresh, we’re here to bring your ideas to life.
                </p>
            </section>
        </div>
    );
}
