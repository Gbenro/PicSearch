import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    term: ''
  }

  onSubmitChange = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  state = {}
  render () {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onSubmitChange}>
          <div className='field'>
            <label> Image search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}
