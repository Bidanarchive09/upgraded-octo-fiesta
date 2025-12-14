import React from 'react';
import Car from './Car';
import type { Car as CarType } from './types';

interface CarListProps {
  cars: CarType[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => <Car key={car.id} car={car} />)}
    </div>
  );
};

export default CarList;