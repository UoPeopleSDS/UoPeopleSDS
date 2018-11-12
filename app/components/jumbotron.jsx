import React from 'react'

export default class JumbotronComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <h1>Hello World!</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ab impedit porro corrupti vero cumque modi
            rem tempora voluptatem et libero magnam quia architecto, est rerum, dolorem debitis beatae officiis!</p>
              <button className='btn btn-primary'>CALL TO ACTION</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
