import React, { Component } from 'react';


class MainContent extends Component {
    render() {
        return (
            <main class="container main">
            <section class="row">
              <div class="col-8 col-sm-9 col-md-10">
                <div class="title">
                  <h5 class="section-title">OUR FEATURED PROJECTS</h5>
                  <span class="section-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis dicta ipsum
                    nihil asperiores laboriosam.</span>
                </div>
              </div>
              <div class="col-4 col-sm-3 col-md-2 align-right">
                <button class="btn btn-outline-primary">SEE ALL</button>
              </div>
            </section>
            <section class="row">
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/200/120" alt="" class="card-img-top"></img>
                  <div class="card-body">
                    <a class="card-category" href="#">Project category</a>
                    <h5 class="card-title">AMAZING PROJECT NAME</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/200/120" alt="" class="card-img-top"></img>
                  <div class="card-body">
                    <small class="card-category">Project category</small>
                    <h4 class="card-title">AMAZING PROJECT NAME</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/200/120" alt="" class="card-img-top"></img>
                  <div class="card-body">
                    <small class="card-category">Project category</small>
                    <h4 class="card-title">AMAZING PROJECT NAME</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <section class="row">
              <div class="col-12">
                <div class="card">
                  <div class="row">
                    <div class="col-7">
                      Content 1
                    </div>
                    <div class="col-5">
                      Content 2
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="row">
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <h5 class="section-title">OUR MISSION</h5>
                    <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde laboriosam tempore est minima
                      tempora possimus cupiditate culpa!
                    </p>
                    <button class="btn btn-primary">GO SOMEWHERE</button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="section-title">UPCOMING EVENTS</h5>
                    <small class="card-category">Project category</small>
                    <h4 class="card-title">AMAZING PROJECT NAME</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="section-title">LATEST NEWS</h5>
                    <small class="card-category">Project category</small>
                    <h4 class="card-title">AMAZING PROJECT NAME</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        );
    }
}

export default MainContent;