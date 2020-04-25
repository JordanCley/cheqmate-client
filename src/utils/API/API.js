/* eslint-disable no-undef */
import axios from "axios";
import BaseURL from "../env-config"

export default {

  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`${BaseURL}/api/user/${id}`);
  },

  // getting products/app items
  getProducts: () => {
    return axios.get(`${BaseURL}/api/products`);
  },

  getOpenCheck: (id) => {
    return axios.get(`${BaseURL}/api/order/open_order/${id}`);
  },

  createOrder: (
    order_items,
    total_items,
    subtotal,
    table_number,
    gratuity,
    tax,
    grand_total
  ) => {
    return axios.post(`${BaseURL}/api/order/new`, {
      order_items: order_items,
      total_items: total_items,
      subtotal: subtotal,
      table_number: table_number,
      gratuity: gratuity,
      tax: tax,
      grand_total: grand_total,
    });
  },

  // updating isPaid to true after payment
  updateIsOrderPaid: (
    id,
    order_items,
    total_items,
    table_number,
    subtotal,
    gratuity,
    tax,
    grand_total
  ) => {
    return axios.put(`${BaseURL}/api/update_order_paid/${id}`, {
      order_items: order_items,
      total_items: total_items,
      table_number: table_number,
      subtotal: subtotal,
      gratuity: gratuity,
      tax: tax,
      grand_total: grand_total,
    });
  },

  // view all past orders
  viewAllOrders: () => {
    return axios.get(`${BaseURL}/api/order/view_all_past_orders`);
  },

  viewPastOrder: (id) => {
    return axios.get(`${BaseURL}/api/order/view_past_order/${id}`);
  },

  // sign up a user to our service
  signUpUser: (first_name, last_name, email, password) => {
    return axios.post(`${BaseURL}/api/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    });
  },
};
