import React from 'react';


const Dashboard = ({ username}) => {
    return (
        <div>
            <h2>Welcome, {username}!</h2>
            <p>This is your dashboard. More features are coming soon!!</p>
        </div>
    );
};


export default Dashboard;