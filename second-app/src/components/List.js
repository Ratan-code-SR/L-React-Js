import React from 'react'
// unique id genarate 
import uniqid from 'uniqid';

const todos = [
    {
        title: "Hello Ratan",
        description: "A JavaScript Symbol is a primitive data type just like Number, "
    },
    {
        title: "Hello Ratan",
        description: "A JavaScript Symbol is a primitive data type just like Number, "
    },
    {
        title: "Hello Ratan",
        description: "A JavaScript Symbol is a primitive data type just like Number, "
    },
];


const List = () => {
    console.log(uniqid());
    return <div>

        {todos.map((todo) => {

            return <div key={uniqid()}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
            </div>
        })}

    </div>
}



export default List;


