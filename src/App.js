import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [date, setDate] = useState(null);
    useEffect(() => {
        async function getDate() {
            const res = await fetch('/api/date');
            const newDate = await res.text();
            setDate(newDate);
        }
        getDate();
    }, []);
    return (
        <main>
            <h1>Testing of Vercel</h1>
            <h3>2 days have passed since Zeit was aquired.</h3>

            <br />
            <h2>The date according to Go is:</h2>
            <p>{date ? date : 'Loading date...'}</p>
        </main>
    );
}

export default App;
