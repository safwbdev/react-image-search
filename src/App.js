import React from 'react';
import './App.css';

const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`

class App extends React.Component {

  state = {
    images:[]
  }

  handleGetRequest = async () => {

    const request = await fetch(url)

    const response = await request.json()

    this.setState({ images: response.hits })

    console.log(this.state.images)
  }

  componentDidMount() {
    this.handleGetRequest();
  }

  render() {
    return (
      <div>App component</div>
    )
  }
}

export default App;
