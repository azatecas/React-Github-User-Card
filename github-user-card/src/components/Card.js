import React from 'react';
import '../App.css';

const Card = (props) => {
    // console.log('card',props.info.login)
    return (
        <div className="user-card" >
            <div >
                <img className="user-img" src={props.info.avatar_url} alt={`profile-img-of-${props.info.name}`}/>
            </div>
            <div>
                <h1>{ props.info.login }</h1>
                <p>Name: { props.info.name }</p>
                <p>Location: { props.info.location }</p>
                <p>Followers: { props.info.followers }</p>
                <p>Profile: <a href={ props.info.html_url } target="a_blank">{ props.info.html_url }</a></p>
            </div>
            
        </div>
    )

}

export default Card;