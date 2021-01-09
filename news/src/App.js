import React, { Component } from "react";
import "./App.css";


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      articles:[]
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5da9dac5bad7465384a9ab85286f36c7')
    .then((response) =>{
      return response.json();
    })
    .then((myJson) =>{
     this.setState({
       articles: myJson.articles
     });
    });
  }
  render(){
    console.log(this.state)
    return(
      <div className ="App">
        {this.state.articles.map((item,index)=>{
          // Retrieve news title from newsapi.org
          return(
            <div>
          <h2 style={{textAlign: "left"}}>
            {item.title}
          </h2>
          Article By:<i> {item.author}</i>
          <br></br>
          <img src={item.urlToImage} style={{width:'40vw'}}/> 
          <a href={item.url}>Read More</a>
          <p>
            {item.content}
          </p>
          </div>
          );
        })}
        <p>News Aggregator</p><i>By Tafadzwa Munyuki©</i>
        </div>
    );
  }
}



export default App;
