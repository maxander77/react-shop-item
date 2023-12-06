import React, { useState } from 'react';
import NewsList from './components/NewsList';
import WeatherWidget from './components/WeatherWidjet';
import IconCard from './components/IconCard';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const newsData = [
    { icon: 'news-icon-1.png', text: 'Text for card', link: 'link news1' },
    { icon: 'news-icon-2.png', text: 'Text for card 2', link: 'link news2' },
  ];
  const weatherData = { temperature: 20, condition: 'Sunny' };
  const iconCardData = { icon: 'icon-url', title: 'Good News Today', description: 'The weather is beautiful today' };

  return (
    <div className="app">
      <NewsList newsData={newsData} />
      <WeatherWidget {...weatherData} />
      <IconCard {...iconCardData} />
    </div>
  );
}

export default App;
