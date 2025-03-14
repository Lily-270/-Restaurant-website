import React, { useState } from 'react';

const TimeCard = ({ time, isSelected, onClick }) => (
    <div
        className={`card ${isSelected ? 'bg-warning' : ''} m-2`}
        style={{ width: '100px', cursor: 'pointer' }}
        onClick={onClick}
    >
        <div className="card-body text-center">
            {time}
        </div>
    </div>
);

const TimeSelection = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [times, setTimes] = useState(['12:00 PM', '2:30 AM', '5:00 PM', '10:00 PM']);
    const [customTime, setCustomTime] = useState('');

    const handleAddCustomTime = (e) => {
        e.preventDefault();
        if (customTime && !times.includes(customTime)) {
            setTimes([...times, customTime]);
            setCustomTime('');
        }
    };

    return (
        <div className="container mt-5 text-left">
            <label className="form-label">Choose a time</label>
            <div className="d-flex flex-row ">
                {times.map((time) => (
                    <TimeCard
                        key={time}
                        time={time}
                        isSelected={selectedTime === time}
                        onClick={() => setSelectedTime(time)}
                    />
                ))}
            </div>
            <form onSubmit={handleAddCustomTime} className="mt-3">
                <input
                    type="text"
                    className="form-control d-inline-block w-auto"
                    placeholder="Enter custom time"
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                />
                <button type="submit" className="btn btn-primary ml-2" style={{ marginLeft: "10px" }}>Add Time</button>
            </form>
        </div>
    );
};

export default TimeSelection;