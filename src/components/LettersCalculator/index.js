// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  updateLetterCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="bg-container">
        <div className="image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="calculator-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="input" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              onChange={this.updateLetterCount}
              id="input"
              className="search-input"
            />
          </div>
          <p className="letters-count">No.of letters: {lettersCount}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
