import React from 'react';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
}
    render() {
        return (
          <div>
          <header class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <h1>Hello World!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ab impedit porro corrupti vero cumque modi
            rem tempora voluptatem et libero magnam quia architecto, est rerum, dolorem debitis beatae officiis!</p>
          <button class="btn btn-primary">CALL TO ACTION</button>
        </div>
      </div>
    </div>
  </header>
            <nav className="navbar navbar-light navbar-expand-sm fixed-top">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto" href="#">
                <img className="logo" src="content/resources/logo.png" alt="UoPeopleSDS logo"></img>
                </a>
              <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="#">HOME</a></li>
                  <li className="nav-item"><a className="nav-link" href="mission.html">MISSION</a></li>
                  <li className="nav-item"><a className="nav-link" href="projects.html">PROJECTS</a></li>
                  <li className="nav-item"><a className="nav-link" href="news.html">NEWS</a></li>
                  <li className="nav-item"><a className="nav-link" href="events.html">EVENTS</a></li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
        );
    }
}

