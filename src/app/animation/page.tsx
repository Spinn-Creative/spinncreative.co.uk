import Link from 'next/link';

export default function Animation(): JSX.Element {
    return (
        <div>
            {/* Hero Section */}
            <section className="animation-hero flex items-center justify-center text-center">
                <div className="animation-hero-overlay">
                    <h1 className="text-6xl font-bold text-white">Animation</h1>
                </div>
            </section>

            {/* Animation Services Section */}
            <section className="container mx-auto px-4 animation-section-container">
                <h2 className="text-4xl font-bold mb-4">Animation Services</h2>
                <p className="text-lg mb-6">
                    At Spinn Creative, we bring stories to life through the
                    magic of animation. From engaging explainer videos to
                    dynamic motion graphics and character animations, we create
                    visuals that move, captivate, and communicate. Whether you
                    need a short animation for social media, a complex video for
                    a marketing campaign, or a fully animated brand story, our
                    animation team has the creativity and technical expertise to
                    deliver results that wow your audience.
                </p>
            </section>

            {/* Our Animation Services Section */}
            <section className="full-width-section">
                <div className="md:flex">
                    <div className="image-side md:w-1/2">
                        <video
                            autoPlay
                            loop
                            muted
                            width="100%"
                            height="auto"
                            className="rounded-lg md:rounded-r-lg"
                        >
                            <source
                                src="/videos/idc-life.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="text-side md:w-1/2 flex flex-col justify-center items-center p-4 md:p-10">
                        <div className="text-content">
                            <h3 className="text-3xl md:text-5xl font-bold mb-4">
                                Our Animation Services Include:
                                <span className="decorative-line"></span>
                            </h3>
                            <p className="text-base md:text-xl mb-4">
                                <strong>Explainer Videos:</strong> Simplify
                                complex ideas with engaging animated explainer
                                videos.
                            </p>
                            <p className="text-base md:text-xl mb-4">
                                <strong>Motion Graphics:</strong> Add movement
                                to your designs with dynamic motion graphics.
                            </p>
                            <p className="text-base md:text-xl mb-4">
                                <strong>Character Animation:</strong> Bring
                                characters to life with personality and charm.
                            </p>
                            <p className="text-base md:text-xl">
                                <strong>3D Animation:</strong> Create immersive
                                and realistic animations that captivate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Animation Section */}
            <section className="full-width-section">
                <div className="md:flex">
                    <div className="text-side md:w-1/2 flex flex-col justify-center items-center p-4 md:p-10">
                        <div className="text-content">
                            <h3 className="text-3xl md:text-5xl font-bold mb-4">
                                Why Choose Animation?
                                <span className="decorative-line"></span>
                            </h3>
                            <p className="text-base md:text-xl">
                                Animation is a powerful tool for storytelling,
                                allowing you to convey your message in a way
                                that is engaging, memorable, and shareable.
                                Whether you're looking to educate, entertain, or
                                inspire, animation offers endless possibilities
                                to connect with your audience.
                            </p>
                        </div>
                    </div>
                    <div className="image-side md:w-1/2">
                        <video
                            autoPlay
                            loop
                            muted
                            width="100%"
                            height="auto"
                            className="rounded-lg md:rounded-l-lg"
                        >
                            <source src="/videos/comp.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-10 md:py-20">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Let’s Animate Your Ideas
                </h2>
                <p className="text-lg mb-6">
                    Ready to make your ideas move? Get in touch with us, and
                    let’s create animations that captivate and inspire.
                </p>
                <Link href="/contact-us">
                    <span className="btn-outline">
                        Get in touch with us now
                    </span>
                </Link>
            </section>
        </div>
    );
}
