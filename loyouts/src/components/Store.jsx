import React, { useState } from 'react';
import ShopCard from './ShopCard';
import ShopItem from './ShopItem';
import IconSwitch from './IconSwitch';
 

const Store = () => {
  const [layout, setLayout] = useState('view_list');
  const products = [
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'red',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'blue',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
    },
    {
      name: 'Nike free run',
      price: '170',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
    },
    {
      name: 'Nike Metcon 3',
      price: '150',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
    },
  ];

  const handleLayoutSwitch = () => {
    setLayout((prevLayout) => (prevLayout === 'view_list' ? 'view_module' : 'view_list'));
  };

  return (
    <div className="store">
      <IconSwitch icon={layout} onSwitch={handleLayoutSwitch} />
      {layout === 'view_list' ? (
        <div className="cards-view">
          {products.map((product, index) => (
            <ShopItem key={index} {...product} />
          ))}
        </div>
      ) : (
        <div className="list-view">
          {products.map((product, index) => (
            <ShopCard key={index} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;