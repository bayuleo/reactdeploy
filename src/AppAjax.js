import React, { Component } from "react";
import axios from "axios";
// App styles
// import "./styles/App.css";
// Custom components
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Trending from "./Components/Trending";

// dummy data
import az from "./images/az.jpg";
const n_title = "Judul beritanya apa aja";
const n_content = `Contoh single content. Ne iusto graeci aliquid qui. Eu
          nam dicit nonumy eirmod, no alii unum sit, similique reprehendunt at per. Vide labitur
          delectus per ei, id exerci posidonium sea, eripuit epicuri suscipit cum at. .`;
// dummy data

// News API
const apiKey = "114a896f34094e35a87c82429a8c64d0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

class AppAjax extends Component {
  state = {
    listNews: [],
    username: "",
    isLogin: false
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        self.setState({ listNews: response.data.articles });
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    // const news = this.state.listNews;
    const { listNews, username, isLogin } = this.state;
    // console.log("news", news);
    return (
      <div className="App">
        <Navigation />
        <Search title="Cari" placeholder="type keyword.." />
        {listNews.map((item, key) => {
          const src_img = item.urlToImage === null ? az : item.urlToImage;
          const content = item.urlToImage !== null ? item.content : "";
          return <Cards key={key} title={item.title} img={src_img} content={content} />;
        })}
      </div>
    );
  }
}

export default AppAjax;