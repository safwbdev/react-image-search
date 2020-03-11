import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm'
import ImageList from './ImageList/ImageList'


class App extends React.Component {
  
  state = {
    images:[]
  }
  
  handleGetRequest = async (e) => {
    
    e.preventDefault()
    
    const searchPhrase = e.target.elements.searchValue.value
    
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchPhrase}&image_type=photo&pretty=true`
    
    const request = await fetch(url)

    const response = await request.json()

    this.setState({ images: response.hits })

    console.log(searchPhrase)

    console.log(this.state.images)
  }

  render() {
    return (
      <div className="container">
        <SearchForm handleGetRequest={this.handleGetRequest} />

        <ImageList images={this.state.images} />

      </div>
    )
  }
}

export default App;
