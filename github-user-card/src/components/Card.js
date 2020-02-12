import React from 'react';
import '../App.css';

const Card = ({info}) => {
    // console.log('card',props.info.login)
    const { login, name, location, followers, html_url, avatar_url} = info;

    return (
        <div className="user-card">
            <div >
                <img className="user-img" src={avatar_url} alt={`profile-img-of-${login}`}/>
            </div>
            <div>
                <h1>{ login }</h1>
                { name ? <p>Name: { name }</p> : null}
                { location ? <p>Location: { location }</p> : null}
                { followers ? <p>Followers: { followers }</p> : null}
                { html_url ? <p>Profile: <a href={ html_url } target="a_blank">{ html_url }</a></p> : null}
            </div>
            
        </div>
    )

}

export default Card;