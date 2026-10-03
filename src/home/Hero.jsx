const Hero = () => {
    return (
         <section id="hero">
        <div className="hero-container">
            <div className="text-wrapper">
                <h2>Aditya Lestyono</h2>
                <p>Fullstack Developer dengan keahlian di React.js, Node.js, dan PostgreSQL. Berpengalaman membangun aplikasi web modern dari frontend hingga backend, termasuk deployment dan manajemen server.</p>
            </div>

            <div className="animation-wrapper">
                <img src={`${import.meta.env.BASE_URL}icon.avif`} alt="icon" />

                <div className="animation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;