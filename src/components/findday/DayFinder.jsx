
import { useState } from 'react';
import axios from 'axios';
import "../../Styles/DayFinder.css";

function DayFinder() {
  const [date, setDate] = useState('');
  const [result, setResult] = useState('');

  const findDay = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/find-day/', {
        params: { date },
      });
      setResult(`The day is: ${response.data.day}`);
    } catch (error) {
      setResult('Error: ' + (error.response?.data.error || 'Failed to fetch the day.'));
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Day Finder</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={findDay}>Find Day</button>
      <p>{result}</p>
    </div>
  );
}

export default DayFinder;
