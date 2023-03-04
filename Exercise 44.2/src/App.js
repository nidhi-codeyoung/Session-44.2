import React, { Component } from "react";
import axios from "axios";

class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		imageURL: '',
	  }
	}
  
	componentDidMount() {
	  axios.get('https://dog.ceo/api/breeds/image/random')
	  .then(response => {
		console.log(response.data);
		this.setState({ imageURL: response.data.message });
	  })
	  .catch(error => {
		console.log(error);
	  });
	}
  
	render() {
	  const { imageURL } = this.state;
	  return (
		<div>
			<center>	  
		  <h1>Dog Photo Gallery</h1>
		  <h2>This has been made by using API requests in React using Axios</h2>
		  <img src={imageURL} alt="dog" />
		  </center>
	
		</div>
	  );
	}
  }

  export default App;
