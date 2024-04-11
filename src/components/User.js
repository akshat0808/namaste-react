import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            <h2>Count2 = {count2}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : Moradabad</h3>
            <h4>Contact : 9876543210, av@av.com</h4>
        </div>
    )
}

export default User;