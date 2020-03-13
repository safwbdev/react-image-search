import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm'
import ImageList from './ImageList/ImageList'


class App extends React.Component {
  
  state = {
    images:[],
    error: null
  }
  
  handleGetRequest = async (e) => {
    
    e.preventDefault()
    
    const searchPhrase = e.target.elements.searchValue.value
    
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchPhrase}&image_type=photo&pretty=true`
    
    const request = await fetch(url)

    const response = await request.json()

    if (!searchPhrase) {
      this.setState({error:"Please Provide a Value"})
    } else{
      this.setState({ images: response.hits, error: null })
    }

  }

  render() {
    return (
      <div>
        <SearchForm handleGetRequest={this.handleGetRequest} />
        {
          this.state.error !== null ? <div>{this.state.error}</div> : <ImageList images={this.state.images} />
        }
      </div>
    )
  }
}

export default App;
