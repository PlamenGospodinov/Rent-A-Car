import React, { useEffect, useState } from "react";
import VehiclesService from "../api/VehicleService";
import Table from "../components/Table/Table.jsx";
import Model from "../components/model/Model.jsx";
import VehicleForm from "../components/VehicleForm/VehicleForm.jsx";
import RentForm from "../components/RentForm/RentForm.jsx";

const Vehicles = () => {
  const [model, setModel] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetchVehicles();
  }, []);
  async function fetchVehicles() {
    const response = await VehiclesService.getAll();
    setVehicles(response);
  }
  async function deleteVehicleById(id) {
    await VehiclesService.delete(id);
    setVehicles(vehicles.filter((c) => c.id !== id));
  }
  async function updateVehicle(newVehicle, id) {
    await VehiclesService.update(newVehicle, id);
    newVehicle.id = id;
    setVehicles(
      vehicles.map((v) => {
        return v.id === id ? { ...newVehicle } : v;
      })
    );
  }
  async function createVehicle(vehicle) {
    await VehiclesService.create(vehicle);
    setVehicles([...vehicles, vehicle]);
  }
  const headers = [
    "Brand",
    "Model",
    "Year",
    "Image Link",
    "Fuel Type",
    "Seats Number",
    "Price per day",
    "Quantity",
    "Vehicle Type",
  ];
  const attributes = [
    "brand",
    "model",
    "constructionYear",
    "imageLink",
    "fuelType",
    "seatsNumber",
    "pricePerDay",
    "quantity",
    "vehicleType",
  ];
  const additionalButton = { text: "Rent", type: "secondary", model: RentForm };
  return (
    <div className="container Vehicles-vehicles">
      <div className="create-buttom-container">
        <button
          className="uk-button uk-button-secondary uk-button-large create-button"
          onClick={() => setModel(true)}
        >
          Add A New Vehicle
        </button>
        <Model visible={model} setVisible={setModel}>
          <VehicleForm
            textSubmit="Add A New Vehicle"
            isVehicle={false}
            action={createVehicle}
          />
        </Model>
      </div>
      {vehicles.length !== 0 ? (
        <Table
          additionalButton={additionalButton}
          headers={headers}
          row_attributes={attributes}
          rows={vehicles}
          deleteRow={deleteVehicleById}
          UpdateFormComponent={VehicleForm}
          updateRow={updateVehicle}
        />
      ) : (
        <h1 className="uk-heading-large centred">No vehicles</h1>
      )}
    </div>
  );
};

export default Vehicles;
