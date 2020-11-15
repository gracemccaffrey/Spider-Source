import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import crd1 from '../images/img-example.jpg';
import crd2 from '../images/img-example.jpg';
import crd3 from '../images/img-example.jpg';
function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={crd1}
              text='Chimney give lights chimney chimney santa holly'
            />
            <CardItem
              src={crd2}
              text='Chimney give lights chimney chimney santa holly'
            />
            <CardItem
              src={crd3}
              text='Chimney give lights chimney chimney santa holly'
            />
          </ul>
            
        </div>
      </div>
    </div>
  );
}

export default Cards;