const Service = () => {
    return (
        <section id="service">
        <div className="service-container">
            <h2>Layanan</h2>
            <div className="service-wrapper">
                <div className="service shadow">
                    <img src="/backend.png" alt="backend"/>
                    <ul>
                        <li>Node Js</li>
                        <li>Ekspress Js</li>
                        <li>PostgreSQL</li>
                        <li>RESTFUL API</li>
                        <li>Debuging</li>
                    </ul>
                    <p>Backend</p>
                    
                </div>
                <div className="service shadow">
                    <img src="/cloud-server.png" alt="backend"/>
                    <ul>
                        <li>CPanel</li>
                        <li>aaPanel</li>
                        <li>Socket.io</li>
                        <li>Nginx</li>
                        <li>Apache</li>
                    </ul>
                    <p>Server</p>
                    
                </div>
                <div className="service shadow">
                    <img src="/front-end.png" alt="backend"/>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React js</li>
                        <li>Context API</li>
                        <li>Redux</li>
                    </ul>
                    <p>Frontend</p>
                </div>
            </div>
        </div>
     </section>
    );
};

export default Service;