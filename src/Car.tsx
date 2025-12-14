import React from 'react';
import type { Car as CarType } from './types';

interface CarProps {
  car: CarType;
}

const Car: React.FC<CarProps> = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <div className="car-info">
        <h3>{car.name}</h3>
        <p className="car-description">{car.description}</p>
        <div className="car-details">
          <span className="car-category">{car.category}</span>
          <span className="car-location">📍 {car.location}</span>
        </div>
        <div className="car-specs">
          <span>Year: {car.year}</span>
          <span>Mileage: {car.mileage.toLocaleString()} km</span>
        </div>
        <div className="import-details">
          <div className="spec-row">
            <span>Engine: {car.engineCapacity}cc</span>
            <span>Transmission: {car.transmission}</span>
          </div>
          <div className="spec-row">
            <span>Drive: {car.driveType}</span>
            <span>Fuel: {car.fuelType}</span>
          </div>
          <div className="spec-row">
            <span>Color: {car.color}</span>
            <span>Steering: {car.steering}</span>
          </div>
          <div className="spec-row">
            <span>Auction Grade: {car.grade}</span>
            <span>Imported: {car.importYear}</span>
          </div>
          <div className="chassis-number">
            <small>Chassis: {car.chassisNumber}</small>
          </div>
        </div>
        <p className="car-price">KES {car.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Car;