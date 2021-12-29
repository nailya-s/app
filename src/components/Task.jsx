import React from 'react';

const Task = ({ id, userId, title, completed }) => {
    return (
        <div>
            <div className="card mb-4" key={title} style={{ width: "18rem", height: "13rem" }}>
                <p className="lead">User {userId} </p>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title ">{title}</h5>
                </div>
                <p> Completed: {completed ? 'Yes':'No'}</p>
            </div>
        </div>
    )
}

export default Task
