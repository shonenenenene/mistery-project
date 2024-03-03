import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount((state) => state + 1);
    };

    return (
        <div className={classes.main}>
            <div>{count}</div>
            <button className={classes.btn} onClick={inc}>
                inc
            </button>
        </div>
    );
};
