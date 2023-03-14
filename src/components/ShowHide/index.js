import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: 'Joe', lastName: 'Jonas'}

  firstName = () => {
    const {firstName} = this.state
    ;<div className="lastname-container">
      <p className="first-name">{firstName}</p>
    </div>
  }

  lastName = () => {
    const {lastName} = this.state
    ;<div className="lastname-container">
      <p className="first-name">{lastName}</p>
    </div>
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <button className="btn" type="button" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <button className="btn" type="button" onClick={this.lastName}>
            Show/Hide Lastname
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide
