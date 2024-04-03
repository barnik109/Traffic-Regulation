import React, { useState, useEffect } from 'react';

const TrafficUpdates = () => {
    const [trafficData, setTrafficData] = useState([]);

    useEffect(() => {
        // Simulated function to fetch real-time traffic data
        const fetchTrafficData = () => {
            // Replace this with your actual API call or data fetching logic
            const dummyTrafficData = [
                { location: 'Main Street', status: 'Heavy congestion' },
                { location: 'Highway 101', status: 'Accident reported' },
                { location: 'City Avenue', status: 'Smooth traffic' },
            ];
            setTrafficData(dummyTrafficData);
        };

        // Fetch traffic data initially
        fetchTrafficData();

        // Set up interval to fetch data periodically (e.g., every 5 minutes)
        const interval = setInterval(fetchTrafficData, 5 * 60 * 1000); // Fetch data every 5 minutes

        // Clear interval on component unmount to prevent memory leaks
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="traffic-updates">
            <h3>Traffic Updates</h3>
            <ul>
                {trafficData.map((data, index) => (
                    <li key={index}>
                        <strong>{data.location}: </strong> {data.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrafficUpdates;
