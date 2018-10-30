import React from "react";
import "./Cards.css";
import news1 from './Assets/News/news1.jpg';
import PropTypes from "prop-types";

const Cards = props =>{
    return (
        <div class="card cards">
            <div className="card-title">
                <img role="presentation" class="media-object img-circle img-35" alt="kumparanNEWS" src="https://alibaba.kumpar.com/kumpar/image/upload/w_50,h_50,c_fill,g_face,f_jpg,q_auto,fl_progressive,fl_lossy/tufp3tpktdtkkk9uzl25.jpg"/>
                <p><strong>kumparanNews</strong></p>
                <p>{props.date}</p>
            </div>
            <img class="card-img-top img-news" src={props.img} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
            </div>
            <hr></hr>
            <div class="card-body text-center">
                <a href="#" class="card-link fa fa-thumbs-up">Suka</a>
                <a href="#" class="card-link fa fa-comment">Komentar</a>
                <a href="#" class="card-link fa fa-share">Bagikan</a>
            </div>
            </div>
    );
};

Cards.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string
  };

export default Cards;