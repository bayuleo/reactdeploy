import React from "react";
import "./Trending.css";

const Trending = () =>{
    return (
        <div className="main-trending">
            <div className="container">
                <div className="row title">
                    <div className="col-md-9 title-left">TRENDING STORIES</div>
                    <div className="col-md-3 title-right">view all</div>
                </div>
                <div className="row content-hot">
                    <div className="col-md-1 content-left">
                        <p className="number">#1</p>
                    </div>
                    <div className="col-md-11 content-right">
                        <p>Nama Pilot dan Pramugari Pesawat Lion Air yang Jatuh di Karawang</p>
                    </div>
                </div>
                <div className="row content-hot">
                    <div className="col-md-1 content-left">
                        <p className="number">#2</p>
                    </div>
                    <div className="col-md-11 content-right">
                        <p>Daftar 181 Penumpang Pesawat Lion Air yang Jatuh di Tanjung Karawang</p>
                    </div>
                </div>
                <div className="row content-hot">
                    <div className="col-md-1 content-left">
                        <p className="number">#3</p>
                    </div>
                    <div className="col-md-11 content-right">
                        <p>Menhub: Ada Indikasi Pesawat Lion Air Tak Bisa Lanjut Terbang</p>
                    </div>
                </div>
                <div className="row content-hot">
                    <div className="col-md-1 content-left">
                        <p className="number">#4</p>
                    </div>
                    <div className="col-md-11 content-right">
                        <p>Kronologi Jatuhnya Pesawat Lion Air Jakarta-Pangkal Pinang di Karawang</p>
                    </div>
                </div>
                <div className="row content-hot">
                    <div className="col-md-1 content-left">
                        <p className="number">#5</p>
                    </div>
                    <div className="col-md-11 content-right">
                        <p>Basarnas: Lion Air Jakarta-Pangkal Pinang Dipastikan Jatuh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;