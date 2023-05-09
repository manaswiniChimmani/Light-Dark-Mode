// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {content: 'Light Mode'}

  click = () => {
    const {content} = this.state

    if (content === 'Light Mode') {
      this.setState({content: 'Dark Mode'})
    } else {
      this.setState({content: 'Light Mode'})
    }
  }

  render() {
    const {content} = this.state

    let mode
    if (content === 'Light Mode') {
      mode = 'dark-mode'
    } else {
      mode = 'light-mode'
    }

    return (
      <div className="container">
        <div className={mode}>
          <h1 className="h1">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.click}>
            {content}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
