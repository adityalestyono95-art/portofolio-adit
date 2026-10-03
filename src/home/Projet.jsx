const Project = () => {
    return (
        <section id="app">
        <div className="app-container">
            <h2>Project Saya</h2>
            <div className="app-wrapper">
                <div className="card shadow">
                    <img src="/depan sekolah.jpg" alt="aplikasi-1"/>

                    <div className="card-body">
                        <p className="card-title">Ngoding Maystery</p>
                        <p className="card-text">Membuat website sekolah dengan menggunakan html, css dan javascrirpt serta aos dengan menggunakan tampilan yang dinamis,interaktif, dan modern</p>
                        <a href="https://adityalestyono95-art.github.io/sekolahku.js.pjr/">
                        <button>Link</button>
                        
                        </a>
                        
                    </div>
                </div>
                <div className="card shadow">
                    <img src="/movewithjoy.jpg" alt="aplikasi-2"/>
                    <div className="card-body">
                        <p className="card-title">Move With Joy</p>
                        <p className="card-text"> website perusahaan/startup jasa moving atau relocation, yang membantu orang memindahkan barang dari tempat tinggal lama ke tempat baru di Amerika Serikat menggunakan framework bootstrap</p>
                       <a href="https://adityalestyono95-art.github.io/project-bootstrap/">
                        <button>Link</button>
                    </a>
                    </div>
                </div>
                <div className="card shadow">
                    <img src="/soonn.jpg" alt="aplikasi-3"/>
                    <div className="card-body">
                        <p className="card-title">E-Commerce</p>
                        <p className="card-text">Website jual beli barang seperti tokopedia (lite) dengan konfigurasi frontend dan juga backend (soon)</p>
                        <button>ComingSoon</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
};

export default Project;