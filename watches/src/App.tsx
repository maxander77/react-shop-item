import React, { useState, useEffect } from 'react';
import './App.css';

interface Clock {
  id: number;
  title: string;
  timezoneOffset: number;
  time: string;
}

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clock[]>([]);
  const [newClockTitle, setNewClockTitle] = useState('');
  const [newClockOffset, setNewClockOffset] = useState<number | ''>('');

  const addClock = () => {
    if (newClockTitle && newClockOffset !== '') {
      setClocks((prevClocks) => [
        ...prevClocks,
        {
          id: Date.now(),
          title: newClockTitle,
          timezoneOffset: +newClockOffset,
          time: getTime(+newClockOffset),
        },
      ]);
      setNewClockTitle('');
      setNewClockOffset('');
    }
  };

  const removeClock = (id: number) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };

  useEffect(() => {
    const intervalId: NodeJS.Timeout[] = [];
    clocks.forEach((clock) => {
      const id = setInterval(() => {
        setClocks((prevClocks) =>
          prevClocks.map((c) =>
            c.id === clock.id ? { ...c, time: getTime(clock.timezoneOffset) } : c
          )
        );
      }, 1000);
      intervalId.push(id);
    });

    return () => {
      intervalId.forEach((id) => clearInterval(id));
    };
  }, [clocks]);

  const getTime = (timezoneOffset: number) => {
    const localTime = new Date();
    const utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    const newTime = new Date(utc + 3600000 * timezoneOffset);
    return newTime.toLocaleTimeString();
  };

  return (
    <div className="App">
      <div>
        <h1>World Clocks</h1>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={newClockTitle}
              onChange={(e) => setNewClockTitle(e.target.value)}
            />
          </label>
          <label style={{ margin: '0 10px' }}>
            Timezone Offset:
            <input
              type="number"
              value={newClockOffset}
              onChange={(e) => setNewClockOffset(e.target.value)}
            />
          </label>
          <button onClick={addClock} style={{ background: 'none' }}>Add Clock</button>
        </div>
        <div>
          {clocks.map((clock) => (
            <div key={clock.id}>
              <span>{clock.title}:</span>
              <span>{clock.time}</span>
              <button onClick={() => removeClock(clock.id)} style={{ background: 'none' }}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
