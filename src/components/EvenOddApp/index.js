import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  NewRandomNum = () => Math.ceil(Math.random() * 100)

  toRandom = () => {
    const randomNum = this.NewRandomNum()
    this.setState(prevState => ({count: (prevState.count = randomNum)}))
  }

  render() {
    const {count} = this.state
    const isWhat = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="back">
        <div className="inner-container">
          <h1>Count {count}</h1>
          <p className="nums">Count is {isWhat}</p>
          <button
            type="button"
            className="button-style"
            onClick={this.toRandom}
          >
            Increment
          </button>
          <p className="para">*Generate a Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
