import React, { useEffect, useState } from "react";
import CustomerService from "../api/CustomerService";
import Table from "../components/Table/Table.jsx";
import Model from "../components/model/Model.jsx";
import CustomerForm from "../components/CustomerForm/CustomerForm.jsx";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [model, setModel] = useState(false);
  useEffect(() => {
    fetchCustomers();
  }, []);
  async function fetchCustomers() {
    const response = await CustomerService.getAll();
    setCustomers(response);
  }
  async function deleteCustomerById(id) {
    await CustomerService.delete(id);
    setCustomers(customers.filter((c) => c.id !== id));
  }
  async function createCustomer(newCustomer) {
    await CustomerService.create(newCustomer);
    setCustomers([...customers, newCustomer]);
  }
  async function updateCustomer(newCustomer, id) {
    await CustomerService.update(newCustomer, id);
    newCustomer.id = id;
    setCustomers(
      customers.map((c) => {
        return c.id === id ? { ...newCustomer } : c;
      })
    );
  }
  const headers = ["Name", "Email", "Phone number"];
  const attributes = ["fullName", "email", "phoneNumber"];
  return (
    <div className="container customers-vehicles">
      <div className="create-buttom-container">
        <button
          className="uk-button uk-button-secondary uk-button-large create-button"
          onClick={() => setModel(true)}
        >
          Add a customer
        </button>
        <Model visible={model} setVisible={setModel}>
          <CustomerForm
            action={createCustomer}
            textSubmit="Add a customer"
            isCustomerWithId={false}
          />
        </Model>
      </div>
      {customers.length !== 0 ? (
        <Table
          headers={headers}
          row_attributes={attributes}
          rows={customers}
          deleteRow={deleteCustomerById}
          UpdateFormComponent={CustomerForm}
          updateRow={updateCustomer}
        />
      ) : (
        <h1 className="uk-heading-large centred">No Customers</h1>
      )}
    </div>
  );
};

export default Customers;
