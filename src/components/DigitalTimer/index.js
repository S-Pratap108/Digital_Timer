// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {mins: 25, seconds: 0, isPaused: true}

  intervalId = null

  startTimer = () => {
    this.intervalId = setInterval(() => {
      const {mins, seconds} = this.state
      if (mins === 0 && seconds === 0) {
        this.pauseTimer()
      } else if (seconds === 0 && mins > 0) {
        this.setState(prevState => ({mins: prevState.mins - 1, seconds: 59}))
        console.log('mins decreased')
      } else {
        this.setState(prevState => ({seconds: prevState.seconds - 1}))
        console.log('seconds decreased')
      }
    }, 1000)
    this.setState({isPaused: false})
  }

  pauseTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isPaused: true})
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({mins: 25, seconds: 0, isPaused: true})
  }

  onDecrease = () => {
    const {isPaused} = this.state
    if (isPaused === true) {
      this.setState(prevState => ({mins: prevState.mins - 1}))
    }
  }

  onIncrease = () => {
    const {isPaused} = this.state
    if (isPaused === true) {
      this.setState(prevState => ({mins: prevState.mins + 1}))
    }
  }

  render() {
    const {mins, seconds, isPaused} = this.state

    return (
      <div className="main-bg">
        <h1 className="hdg">Digital Timer</h1>
        <div className="card">
          <div className="timer-cont">
            <div className="clock-cont">
              <h className="timer">
                {mins}
                {seconds < 10 ? ':0' : ':'}
                {seconds}
              </h>
              {isPaused ? (
                <p className="status">Paused</p>
              ) : (
                <p className="status">Running</p>
              )}
            </div>
          </div>
          <div className="operation-cont">
            <div className="opertors-cont">
              <img
                src={
                  isPaused
                    ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                }
                alt={isPaused ? 'play icon' : 'pause icon'}
                className="icon"
                onClick={isPaused ? this.startTimer : this.pauseTimer}
              />
              <button
                type="button"
                className="para"
                onClick={isPaused ? this.startTimer : this.pauseTimer}
              >
                {isPaused ? 'Start' : 'Pause'}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="icon"
                onClick={this.resetTimer}
              />
              <button type="button" className="para" onClick={this.resetTimer}>
                Reset
              </button>
            </div>
            <p> Set Timer Limit </p>
            <div className="control-btns-cont">
              <button
                type="button"
                className="control-btn"
                onClick={this.onDecrease}
              >
                -
              </button>
              <p className="set-no"> {mins} </p>
              <button
                type="button"
                className="control-btn"
                onClick={this.onIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
