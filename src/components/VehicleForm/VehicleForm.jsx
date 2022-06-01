import React, { useState } from "react";

const VehicleForm = ({ action, textSubmit, isVehicle, id }) => {
  const defaultVehicle = {
    brand: "",
    model: "",
    constructionYear: "",
    fuelType: "Petrol",
    imageLink: "",
    seatsNumber: "",
    pricePerDay: "",
    quantity: "",
    vehicleType: "Economy",
  };
  const [vehicle, setVehicle] = useState(defaultVehicle);
  const actionVehicle = (e) => {
    if (!isVehicle) {
      vehicle.id = Date.now();
      action(vehicle, id);
    } else {
      action(vehicle);
    }
    setVehicle(defaultVehicle);
  };
  return (
    <div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Brand"
          value={vehicle.brand}
          onChange={(e) => setVehicle({ ...vehicle, brand: e.target.value })}
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Model"
          value={vehicle.model}
          onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="number"
          placeholder="Year"
          value={vehicle.constructionYear}
          onChange={(e) =>
            setVehicle({ ...vehicle, constructionYear: e.target.value })
          }
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Image Link"
          value={vehicle.imageLink}
          onChange={(e) =>
            setVehicle({ ...vehicle, imageLink: e.target.value })
          }
        />
      </div>
      <div className="uk-margin">
        <select
          className="uk-select"
          onChange={(e) => setVehicle({ ...vehicle, fuelType: e.target.value })}
        >
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="number"
          placeholder="Seats Number"
          value={vehicle.seatsNumber}
          onChange={(e) =>
            setVehicle({ ...vehicle, seatsNumber: e.target.value })
          }
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="number"
          placeholder="Price per day"
          value={vehicle.pricePerDay}
          onChange={(e) =>
            setVehicle({ ...vehicle, pricePerDay: e.target.value })
          }
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="number"
          placeholder="Quantity"
          value={vehicle.quantity}
          onChange={(e) => setVehicle({ ...vehicle, quantity: e.target.value })}
        />
      </div>
      <div className="uk-margin">
        <select
          className="uk-select"
          onChange={(e) => setVehicle({ ...vehicle, vehicleType: e.target.value })}
        >
          <option>Economy</option>
          <option>Estate</option>
          <option>Luxury</option>
          <option>SUV</option>
          <option>Cargo</option>
        </select>
      </div>
      <button
        className="uk-button uk-button-secondary uk-button-large uk-align-center"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={actionVehicle}
        disabled={
          vehicle.brand.length !== 0 &&
            vehicle.model.length !== 0 &&
            vehicle.constructionYear.length !== 0 &&
            vehicle.imageLink.length !== 0 &&
            vehicle.fuelType.length !== 0 &&
            vehicle.seatsNumber.length !== 0 &&
            vehicle.pricePerDay.length !== 0 &&
            vehicle.quantity.length !== 0 &&
            vehicle.vehicleType.length !== 0
            ? false
            : true
        }
      >
        {textSubmit}
      </button>
    </div >
  );
};

export default VehicleForm;
