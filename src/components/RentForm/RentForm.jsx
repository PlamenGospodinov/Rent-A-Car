import React, { useEffect, useState } from "react";
import CustomerService from "../../api/CustomerService";
import RentService from "../../api/RentService";

const RentForm = ({ row }) => {
  const [customer, setCustomer] = useState({ fullName: "", email: "", phoneNumber: "" });
  const [customers, setCustomers] = useState([]);
  const [rentPrice, setRentPrice] = useState(row.pricePerDay);
  const [rentDays, setRentDays] = useState(1);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response_customers = await CustomerService.getAll();
    setCustomers(response_customers);
  }
  const calculatePrice = (days) => {
    const rentDays = parseInt(days);
    setRentDays(rentDays);
    if (rentDays >= 10)
      setRentPrice((row.pricePerDay * rentDays * 0.9).toFixed(2));
    else if (rentDays >= 5)
      setRentPrice((row.pricePerDay * rentDays * 0.93).toFixed(2));
    else if (rentDays >= 3)
      setRentPrice((row.pricePerDay * rentDays * 0.95).toFixed(2));
    else if (rentDays >= 1)
      setRentPrice((row.pricePerDay * 5).toFixed(2));

  };
  const addDays = (days, date) => {
    const endDateOfRent = new Date(date.valueOf());
    endDateOfRent.setDate(endDateOfRent.getDate() + days);
    return endDateOfRent;
  };
  async function rentAction() {
    const customerId = customers.find(
      (c) => c.fullName === customer.fullName && c.email === customer.email
    ).id;
    const date = new Date(Date.now());
    await RentService.create({
      id: Date.now(),
      customer: customerId,
      vehicle: row.id,
      startDate: date,
      endDate: addDays(rentDays, date),
      price: parseFloat(rentPrice),
    });
    window.location.reload();
  }
  return (
    <div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Name"
          value={customer.fullName}
          onChange={(e) =>
            setCustomer({ ...customer, fullName: e.target.value })
          }
        />
      </div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
      </div>
      <div className="uk-margin">
        <select
          className="uk-select"
          onChange={(e) => calculatePrice(e.target.value)}
        >
          <option value={1}>1 day</option>
          <option value={2}>2 days</option>
          <option value={3}>3 days (-5%)</option>
          <option value={4}>4 days (-5%)</option>
          <option value={5}>5 days (-7%)</option>
          <option value={6}>6 days (-7%)</option>
          <option value={7}>7 days (-7%)</option>
          <option value={8}>8 days (-7%)</option>
          <option value={9}>9 days (-7%)</option>
          <option value={10}>10 days (-10%)</option>
          <option value={11}>11 days (-10%)</option>
          <option value={12}>12 days (-10%)</option>
          <option value={13}>13 days (-10%)</option>
          <option value={14}>14 days (-10%)</option>
          <option value={15}>15 days (Max days allowed) (-10%)</option>
        </select>
      </div>
      <h1 className="uk-heading-small uk-text-primary">Price: {rentPrice} Euro</h1>
      <button
        className="uk-button uk-button-secondary uk-button-large uk-align-center"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={rentAction}
        disabled={
          customers.filter(
            (c) =>
              c.fullName === customer.fullName && c.email === customer.email
          ).length > 0
            ? false
            : true
        }
      >
        Rent
      </button>
    </div>
  );
};

export default RentForm;
