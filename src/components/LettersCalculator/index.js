// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange1 = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container1">
        <div className="bgContainer">
          <div className="bgContainer1">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <label className="para" htmlFor="one">
              Enter the phrase
            </label>
            <input
              id="one"
              type="text"
              className="input1"
              placeholder="Enter the Phrase"
              onChange={this.onChange1}
              value={count}
            />
            <br />
            <div className="btn1">
              <p>No.of letters: {count.length}</p>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="img1"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
