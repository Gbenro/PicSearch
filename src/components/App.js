import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'

class App extends Component {
  async onSearchSubmit (term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID f363802431dc7a5495fdc1a5ef028884404e5ee1d32ee52e4d258cb3b2ce188d'
      }
    })
    console.log(response.data.results)
  }
  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
