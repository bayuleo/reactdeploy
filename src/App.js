import React, { Component } from 'react';
// import logo from './logo.svg';
import './Components/Header';
import './Components/Cards';
import './Components/Trending';
import './Components/Footer';
import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Trending from './Components/Trending';
import Footer from './Components/Footer';
import axios from "axios";
import az from "./Components/Assets/News/news1.jpg";

const apiKey = "114a896f34094e35a87c82429a8c64d0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "everything?" + "q=news&" + "apiKey=" + apiKey;
const urlTrending = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

var dateFormat = require('dateformat');
// var now = new Date();

class App extends Component {
  state = {
    listNews: [],
    listTrendings: [],
    username: "",
    isLogin: false
  };

  getNews = () => {
    return axios.get(urlHeadline);
  }
  
  getTrending = () => {
    return axios.get(urlTrending);
  }

  componentDidMount = () => {
    const self = this;
    // axios
    //   .get(urlHeadline)
    //   .then(function(response) {
    //     self.setState({ listNews: response.data.articles });
    //     // handle success
    //     console.log(response.data);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   });
    // axios.all([
    //   axios.get(urlHeadline),
    //   axios.get(urlTrending)
    // ])
    // .then(axios.spread((listNews, listTrendings) => {
    //   console.log(listTrendings)
    // });

    axios.all([self.getNews(), self.getTrending()])
    .then(axios.spread(function (listNews, listTrendings) {
      // Both requests are now complete
      self.setState({ listNews: listNews.data.articles, listTrendings: listTrendings.data.articles });
      
      console.log(listNews.data.articles)
      console.log(listTrendings.data.articles)
    }));
  };

  render() {

    const { listNews, listTrendings, username, isLogin, date } = this.state;

    return (
      <div className="background">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <Header></Header>
              </div>
              <div className="col-md-2 header-right fa fa-plus-circle">Create Story</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-3 content-left">
              <div className="row title">
                    <div className="col-md-9 title-left">TRENDING STORIES</div>
                    <div className="col-md-3 title-right">view all</div>
                </div>
              {listTrendings.map((item, key) => {
              const src_img = item.urlToImage === null ? az : item.urlToImage;
              const content = item.urlToImage !== null ? item.content : "";
              return <Trending key={key} title={item.title} img={src_img} content={content} date={item.publishedAt} url={item.url}/>;
              })}
              </div>
              <div className="col-md-6 content-center">
              {listNews.map((item, key) => {
              const src_img = item.urlToImage === null ? az : item.urlToImage;
              const content = item.urlToImage !== null ? item.description : "";
              const date = new dateFormat(item.publishedAt,"dddd, mmmm dS, yyyy, h:MM:ss TT")
              return <Cards key={key} title={item.title} img={src_img} content={content} date={item.publishedAt} />;
              })}
              </div>
              <div className="col-md-3 content-right"></div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
