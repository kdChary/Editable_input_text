import {Component} from 'react'

import './index.css'

class Input extends Component {
  state = {isClicked: false, inputValue: ''}

  toggleInput = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  inputValueChanged = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {isClicked, inputValue} = this.state

    return (
      <div className="main-container">
        <div className="app-container">
          <h3 className="app-title">Editable Text Input</h3>
          <div className="hide-show">
            {isClicked ? (
              <div className="display">
                <p className="paragraph">{inputValue}</p>
              </div>
            ) : (
              <div className="hide-item">
                <input
                  type="text"
                  value={inputValue}
                  onChange={this.inputValueChanged}
                  className="input"
                />
              </div>
            )}
            <div className="button-card">
              <button
                className="button"
                type="button"
                onClick={this.toggleInput}
              >
                {isClicked ? 'Edit' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Input
