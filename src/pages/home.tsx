import Head from 'next/head';

import '../styles/home.module.css';

const Home = () => {

    const handleLocate = () => {

        const city = "Angeles";

        navigator.geolocation.getCurrentPosition((position) => {
            var latitude = position.coords.latitude;
            var longtitude = position.coords.longitude;

            console.log(latitude, longtitude)
        });

    };

    return (
        <div style={{ height: '100vh' }}>
            <div className='d-flex h-100 text-center text-white bg-dark'>

                <Head>
                    <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/cover/"></link>
                </Head>

                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="cover.html"><img src = "images/logos.jpg.png" alt = "Qlibc Logo" width= "110px" height  = "80px" ></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="newhome.html">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled">Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <main className="text-center px-3">
                    <h1>Find thy Library</h1>
                    <p className="lead">Let as find the nearest library in your place together with the library card in your own devices</p>

                    <button type="button" className="btn btn-warning text-white" onClick={handleLocate}>Locate</button>
                </main>

                <footer className="mt-auto text-white-50">
                    <p>Group 1 of I301.</p>
                </footer>
            </div>
        </div>
    );
}

export default Home;