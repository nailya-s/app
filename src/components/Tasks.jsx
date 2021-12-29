import React from 'react';
import { useState, useEffect } from 'react';
import Task from './Task';
import axios from 'axios';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            debugger
            setTasks(response.data);
    };
    



    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Tasks</h1>
                      
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                    {tasks.map(t => 
                        <Task key={t.title} id={t.id} userId={t.userId} title={t.title} completed ={t.completed}/>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Tasks
