import React from 'react';
import './index.css';


function Card(props)
{
    return (
        <>
        <div className="collections">
            <div className="card">
                <img className="image" src={props.imgsrc} alt="series"></img>
                <div className="class_info">
                    <span className="class_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link}  target="_blank">
                        <button className="card_link">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>

    );
}

export default Card;

