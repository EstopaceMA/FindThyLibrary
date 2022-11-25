import Head from 'next/head'
import Link from 'next/link'
import '../styles/index.module.css'

const Index = () => {
  
  return (
    <div>

      <Head>
        <title>Find Thy Library</title>
      </Head>

      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="cover.html"><img src="images/logos.jpg.png" alt="Qlibc Logo" width="110px" height="80px" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Library Near Me</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit"><Link href="/login">Login</Link></button>
            </form>
          </div>
        </div>
      </nav>

      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="images/dejalu2.gif" alt="First slide"></img>
              
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Free to Sign-in.</h1>
                  <p>Free to sign-in and use the features of the online library card.</p>
                  <p><a className="btn btn-lg btn-primary" href="sign-in.html">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/ex.gif" alt="First slide"></img>
              
              <div className="container">
                <div className="carousel-caption">
                  <h1>Explore the Qlibc</h1>
                  <p>Surf the Qlibc into your expense and find out the services.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/contract.gif" alt="First slide"></img>

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Let's Upgrade.</h1>
                  <p>Browse packeges that could be beneficial into your community.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse packages</a></p>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>

        <div className="container marketing">

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">View every transaction. <span className="text-muted">Less hassle to do.</span></h2>
              <p className="lead">Enable to easy access to your own library card without the worry of missing it.</p>
            </div>
            <div className="col-md-5">
              <img className="d-block w-100" src="images/trans.gif" alt="beg"></img>

            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">See the analytics to your libraries. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Worry no more for both the borrower and the librarian because now it is easy to see the analytics in the libraries.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="d-block w-100" src="images/analytics.gif" alt="mid"></img>

            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">And lastly, find the nearest library in your area. <span className="text-muted">You easily to see.</span></h2>
              <p className="lead">And yes, this is the most convinient way for you to find the nearest library and able to access it.</p>
            </div>
            <div className="col-md-5">
              <img className="d-block w-100" src="images/nearest0.gif" alt="last"></img>

            </div>
          </div>

          <hr className="featurette-divider"></hr>

        </div>
      </main>

      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>

    </div>
  )
}

export default Index;