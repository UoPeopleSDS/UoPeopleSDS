import React from 'react'

export default class BodyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className='container main'>
        <section className='row'>
          <div className='col-8 col-sm-9 col-md-10'>
            <div className='title'>
              <h5 className='section-title'>OUR FEATURED PROJECTS</h5>
              <span className='section-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nobis dicta ipsum
                    nihil asperiores laboriosam.</span>
            </div>
          </div>
          <div className='col-4 col-sm-3 col-md-2 align-right'>
            <button className='btn btn-outline-primary'>SEE ALL</button>
          </div>
        </section>
        <section className='row'>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='card'>
              <img src='https://picsum.photos/200/120' alt='' className='card-img-top' />
              <div className='card-body'>
                <a className='card-category' href='#'>Project category</a>
                <h5 className='card-title'>AMAZING PROJECT NAME</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='card'>
              <img src='https://picsum.photos/200/120' alt='' className='card-img-top' />
              <div className='card-body'>
                <small className='card-category'>Project category</small>
                <h4 className='card-title'>AMAZING PROJECT NAME</h4>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='card'>
              <img src='https://picsum.photos/200/120' alt='' className='card-img-top' />
              <div className='card-body'>
                <small className='card-category'>Project category</small>
                <h4 className='card-title'>AMAZING PROJECT NAME</h4>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='row'>
                <div className='col-7'>
                  Content 1
                </div>
                <div className='col-5'>
                  Content 2
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='row'>
          <div className='card-deck'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='section-title'>OUR MISSION</h5>
                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde laboriosam tempore est minima
                  tempora possimus cupiditate culpa!
                </p>
                <button className='btn btn-primary'>GO SOMEWHERE</button>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h5 className='section-title'>UPCOMING EVENTS</h5>
                <small className='card-category'>Project category</small>
                <h4 className='card-title'>AMAZING PROJECT NAME</h4>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h5 className='section-title'>LATEST NEWS</h5>
                <small className='card-category'>Project category</small>
                <h4 className='card-title'>AMAZING PROJECT NAME</h4>
                <p className='card-text'>
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
