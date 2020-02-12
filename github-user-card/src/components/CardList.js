import React from "react";
import Card from "./Card";


const CardList = (props) => {
    // console.log('cardlist',props);
    const user = props.info;
    const followers = props.followers;

    followers.unshift(user);
    
    
    

    return (
        <div>
            <h1>Github Users</h1>
            {followers.map((item, index) => {
                console.log(item.id)
                return <Card info={ item } key={ item.id } />
            })}
        </div>
    )


}

export default CardList;