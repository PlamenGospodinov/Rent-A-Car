import React, { useState } from "react";

const CustomerForm = ({ action, textSubmit, isCustomerWithId, id }) => {
  const [customer, setCustomer] = useState({ fullName: "", email: "", phoneNumber: "" });
  const actionCustomer = (e) => {
    e.preventDefault();
    const newCustomer = {
      email: customer.email,
      fullName: customer.fullName,
      phoneNumber: customer.phoneNumber
    };
    if (!isCustomerWithId) {
      newCustomer.id = Date.now();
      action(newCustomer);
    } else {
      action(newCustomer, id);
    }
    setCustomer({ fullName: "", email: "", phoneNumber: "" });
  };
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
        <input
          className="uk-input uk-form-width-large uk-form-large"
          type="text"
          placeholder="Phone number"
          value={customer.phoneNumber}
          onChange={(e) => setCustomer({ ...customer, phoneNumber: e.target.value })}
        />
      </div>
      <button
        className="uk-button uk-button-primary uk-button-large uk-align-center"
        style={{ display: "flex", justifyContent: "center" }}
        onClick={actionCustomer}
        disabled={
          customer.email.length !== 0 && customer.fullName.length !== 0 && customer.phoneNumber.length !== 0
            ? false
            : true
        }
      >
        {textSubmit}
      </button>
    </div>
  );
};

export default CustomerForm;
