import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';


const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date time .... </p>
        </div>
    );
};


const ShowCounter = ({ hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                
                <DateTimeDisplay value={minutes} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} isDanger={false} />
            </a>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [  minutes, seconds] = useCountdown(targetDate);

    if (  minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
