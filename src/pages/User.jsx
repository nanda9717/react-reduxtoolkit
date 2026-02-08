import React, { useEffect, useState } from 'react';

const User = () => {
    const [data, setData] = useState([{
                id: 1,
                name: 'Narendra Kumar'
            },{
                id: 2,
                name: 'Prince'
            },{
                id: 3,
                name: 'John Doe'
            },{
                id: 4,
                name: 'Rohit'
            },{
                id: 5,
                name: 'Virat'
            }]);
    return (
        <div>
            <h3>All User Data</h3>
            {
                data?.map((row, index) => <p key={index}>{row.name}</p> )
            }
        </div>
    );
};

export default User;