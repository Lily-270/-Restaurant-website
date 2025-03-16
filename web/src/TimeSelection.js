import React, { useState, useEffect } from 'react';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    // Ensure only 5 time slots are returned
    return result.slice(0, 5);
};

const TimeCard = ({ time, isSelected, onClick }) => (
    <div
        className={`card ${isSelected ? 'bg-warning' : ''} m-2`}
        style={{ width: '150px', cursor: 'pointer', textAlign: 'center' }}
        onClick={onClick}
    >
        <div className="card-body">
            <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{time}</span>
        </div>
    </div>
);

const TimeSelection = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [times, setTimes] = useState([]);
    const [customTime, setCustomTime] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        const initializeTimes = () => {
            const availableTimes = fetchAPI(new Date(selectedDate)); // Using fetchAPI function
            setTimes(availableTimes);
        };
        initializeTimes();
    }, [selectedDate]);

    const handleAddCustomTime = () => {
        const trimmedTime = customTime.trim();
    
        if (trimmedTime && !times.includes(trimmedTime)) {
            setTimes((prevTimes) => [...prevTimes, trimmedTime]); // Update state correctly
            setCustomTime(''); // Clear input field
        }
    };
    
    return (
        <div className="container mt-2 text-left">
            <label className="form-label">Choose a time</label>
            <div className="d-flex flex-row flex-wrap">
                {times.map((time) => (
                    <TimeCard
                        key={time}
                        time={time}
                        isSelected={selectedTime === time}
                        onClick={() => setSelectedTime(time)}
                    />
                ))}
            </div>
            <div className="mt-3">
                <input
                    type="text"
                    className="form-control d-inline-block w-auto"
                    placeholder="Enter custom time"
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                />
                <button 
                    type="button" 
                    className="btn btn-primary ml-2" 
                    onClick={handleAddCustomTime} 
                    style={{ marginLeft: "10px" }}
                >
                    Add Time
                </button>
            </div>
            <label className="form-label mt-3">Select a date</label>
            <input
                type="date"
                className="form-control"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
        </div>
    );
};

export default TimeSelection;