import React from "react";
import Card from "./Card";


const CardList = ({info, followers}) => {
    // console.log('cardlist',props);
    const user = info;
    const totalList = followers;

    totalList.unshift(user);
    
    
    

    return (
        <div>
            <h1>Github Users</h1>
            {totalList.map((item, index) => {
                console.log(item.id)
                return <Card info={ item } key={ item.id } />
            })}
        </div>
    )


}

export default CardList;