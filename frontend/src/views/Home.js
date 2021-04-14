import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h1 onClick={()=>document.location.href = "/account"}>HOME</h1>
        </div>
    )
}

export default Home;