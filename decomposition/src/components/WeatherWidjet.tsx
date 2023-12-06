import React from 'react';

interface WeatherWidgetProps {
  temperature: number;
  condition: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ temperature, condition }) => {
  return (
    <div className="weather-widget">
      <p>Temperature: {temperature}</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherWidget;