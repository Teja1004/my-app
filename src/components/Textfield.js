
import React, { useState } from "react";
import Displaydata from "./Displaydata";
import BtnFileld from "./btn";

const TextFiled = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [count, setCount] = useState(0);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div className="TextFiled">
            <div>count is:{count}</div>
            <div>Enter Name</div>
            <input type="text" onChange={handleNameChange} />
            <div>Enter Age</div>
            <input type="text" onChange={handleAgeChange} />
            <BtnFileld onClick={handleClick} />
            <Displaydata name={name} age={age} />
        </div>
    );
};

export default TextFiled;