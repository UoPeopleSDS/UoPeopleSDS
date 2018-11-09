import React from 'react'
import NavbarComponent from '../components/navbar.jsx'
import BodyContent from '../components/body.jsx'
import FooterContent from '../components/footer.jsx'
import JumbotronComponent from '../components/jumbotron.jsx'
export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='HomePage'>
        <NavbarComponent />
        <JumbotronComponent />
        <BodyContent />
        <FooterContent />
      </div>
    )
  }
}
