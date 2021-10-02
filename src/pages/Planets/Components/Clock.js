import AnalogueClock from "react-analogue-clock";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import {useEffect, useState} from "react";


export const ClockElement = ({ hours }) => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date(new Date().setHours(hours))),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <Clock renderNumbers={true} value={value} />
        </div>
    )
}