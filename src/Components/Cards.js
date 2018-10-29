import React from "react";
import "./Cards.css";
import news1 from './Assets/News/news1.jpg';

const Cards = () =>{
    return (
        <div class="card cards">
            <div className="card-title">
                <img role="presentation" class="media-object img-circle img-35" alt="kumparanNEWS" src="https://alibaba.kumpar.com/kumpar/image/upload/w_50,h_50,c_fill,g_face,f_jpg,q_auto,fl_progressive,fl_lossy/tufp3tpktdtkkk9uzl25.jpg"/>
                <p><strong>kumparanNews</strong></p>
                <p>Senin 29 Oktober 2018 18:18</p>
            </div>
            <img class="card-img-top img-news" src={news1} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">6 Kantong Jenazah Korban Lion Air Tiba di Pelabuhan JICT Tanjung Priok</h5>
                <p class="card-text">Keenam kantong jenazah langsung dibawa ke RS Polri Kramat Jati.</p>
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

export default Cards;