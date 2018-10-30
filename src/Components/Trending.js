import React from "react";
import "./Trending.css";
import PropTypes from "prop-types";

const Trending = props =>{
    return (
        <div className="main-trending">
            <div className="container">
                {/* <div className="row title">
                    <div className="col-md-9 title-left">TRENDING STORIES</div>
                    <div className="col-md-3 title-right">view all</div>
                </div> */}
                <div className="row content-hot">
                    <div className="col-md-1 content-left">
                        <p className="number">#1</p>
                    </div>
                    <div className="col-md-11 content-right">
                        <p><a href={props.url}>{props.title}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Trending.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string
  };

export default Trending;