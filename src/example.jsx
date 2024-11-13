import React from "react";
import { useState } from 'react';
import {render} from "@testing-library/react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    <button onClick={() =>setCount(count<1 ? count : count -1 )}>
        Decrement
    </button>
            <h1>{count}</h1>
        </div>
);
}
