import React, { useState } from 'react';

interface Workout {
  date: string;
  distance: number;
}

const WorkoutTracker: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [date, setDate] = useState<string>('');
  const [distance, setDistance] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const existingWorkoutIndex = workouts.findIndex((workout) => workout.date === date);

    if (existingWorkoutIndex !== -1) {
      const updatedWorkouts = [...workouts];
      updatedWorkouts[existingWorkoutIndex].distance += parseFloat(distance);
      setWorkouts(updatedWorkouts);
    } else {
      const newWorkout: Workout = {
        date,
        distance: parseFloat(distance),
      };
      const sortedWorkouts = [...workouts, newWorkout].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setWorkouts(sortedWorkouts);
    }

    setDate('');
    setDistance('');
  };

  const handleDelete = (dateToDelete: string) => {
    const updatedWorkouts = workouts.filter((workout) => workout.date !== dateToDelete);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div>
      <h1>Workout Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label style={{ marginLeft: '20px' }}>
          Distance (km):
          <input
            type="number"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </label>
        <button type="submit" style={{ marginLeft: '20px', background: 'red' }}>OK</button>
      </form>
      <table>
        <thead>
          <tr style={{ marginTop: '20px' }}>
            <th>Date</th>
            <th>Distance (km)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.date}>
              <td>{workout.date}</td>
              <td>{workout.distance.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDelete(workout.date)}style={{ background: 'inherit' }}>✘</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutTracker;
