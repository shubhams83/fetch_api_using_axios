import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import axios from "axios";

const Card = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://all-the-weather.herokuapp.com/cities")
            .then((res) => {
                setArticles(res.data.items)
            })
            return 
    }, []);

    return (
        <>
            {
                articles.map((article) => {
                    const { id, name, regionCode, countryCode, title } = article;
                    return (
                        <div className="blog-card" key={id}>
                        {/* <div className="blog-img">
                            <img src={thumbnailUrl} alt="tech-1" />
                        </div> */}
                        <div className="blog-detail">
                            <h2>{name}</h2>
                            <p>
                                {countryCode}
                            </p>
                            <div className="btns">
                                <button id="read-btn">Read More</button>
                                <button id="wish-btn">+ Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
};

export default Card;
