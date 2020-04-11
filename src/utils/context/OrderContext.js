import React, { createContext, useState, useEffect } from "react";
import API from "../API/API";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  const initialState = {
    items: [],
    totalItems: 0,
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 9.9,
    grandTotal: 0,
  };

  const [openCheckState, setOpenCheckState] = useState({});
  const [tipMethodState, setTipMethodState] = useState({
    tipMethod: "radioTip",
  });
  const [pastOrderState, setPastOrderState] = useState([]);
  const [viewPastOrderState, setViewPastOrderState] = useState({});
  const [isPaidState, setIsPaidState] = useState(false);
  const [productsState, setProductsState] = useState([]);
  const [viewAppetizerState, setViewAppetizerState] = useState({});
  const [orderState, setOrderState] = useState(initialState);

  useEffect(() => {
    API.getProducts()
      .then((res) => {
        setProductsState(res.data);
      })
      .catch((err) => alert(err));
  }, [isPaidState]);

  const viewOneAppetizer = (id) => {
    let item = productsState.filter((product) => {
      return product._id === id;
    });
    item = item[0];
    setViewAppetizerState(item);
  };

  const viewOnePastOrder = (id) => {
    let item = pastOrderState.filter((order) => {
      return order._id === id;
    });
    item = item[0];
    setViewPastOrderState(item);
  };

  const resetTipMethod = () => {
    setTipMethodState({ tipMethod: "radioTip" });
  };

  const addItemToCart = (id) => {
    let item = productsState.filter((product) => {
      return product._id === id;
    });

    item = item[0];
    if (!item.quantity) {
      item.quantity = 1;
    } else {
      item.quantity++;
    }
    let orderItemsArray = orderState.items.filter((listItem) => {
      return listItem._id !== id;
    });
    setOrderState({ ...orderState, items: [...orderItemsArray, item] });
  };

  const removeItemFromCart = (id) => {
    if (!orderState.items.length) {
      alert("There are no items in cart");
    } else {
      let item = productsState.filter((product) => {
        return product._id === id;
      });
      item = item[0];

      item.quantity = 0;

      let arr = orderState.items.filter((listItem) => {
        return listItem._id !== id;
      });
      setOrderState({ ...orderState, items: [...arr] });
    }
  };

  const decrementQuantity = (id) => {
    let item = productsState.filter((product) => {
      return product._id === id;
    });
    item = item[0];
    if (item.quantity === 1) {
      alert("If you would lke to remove the item, please use delete button");
    } else {
      item.quantity--;
    }

    let arr = orderState.items.filter((listItem) => {
      return listItem._id !== id;
    });
    setOrderState({ ...orderState, items: [...arr, item] });
  };

  const updateIsOrderPaidClick = () => {
    return API.updateIsOrderPaid(
      openCheckState._id,
      openCheckState.items,
      openCheckState.totalItems,
      openCheckState.tableNum,
      openCheckState.total,
      openCheckState.gratuity,
      openCheckState.tax,
      openCheckState.grandTotal
    )
      .then(() => setIsPaidState(true))
      .then(() => setOpenCheckState({}))
      .catch((err) => alert(err));
  };

  const createOrderClick = () => {
    return API.createOrder(
      orderState.items,
      orderState.tableNum,
      orderState.totalItems,
      orderState.total,
      orderState.gratuity,
      orderState.tax,
      orderState.grandTotal
    )
      .then((res) => setOpenCheckState(res.data))
      .then(() => setIsPaidState(false))
      .catch((err) => alert(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderState({ ...orderState, [name]: value });
  };

  const handleTipChange = (event) => {
    const { name, value } = event.target;
    setOpenCheckState({ ...openCheckState, [name]: value });
  };

  const handleTipMethodChange = (event) => {
    const { name, value } = event.target;
    setTipMethodState({ [name]: value });
  };

  const viewAllOrdersClick = () => {
    return API.viewAllOrders()
      .then((res) => setPastOrderState(res.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    const subTotal = (array) => {
      let itemTotal = 0;
      for (let i = 0; i < array.length; i++) {
        itemTotal = itemTotal + array[i].price * array[i].quantity;
      }
      setOrderState({ ...orderState, total: itemTotal });
    };
    subTotal(orderState.items);
    // eslint-disable-next-line
  }, [orderState.items]);

  useEffect(() => {
    calculateGrandTotal(openCheckState);
    // eslint-disable-next-line
  }, [openCheckState.gratuity]);

  const calculateGrandTotal = (state) => {
    let tipTotal = state.total * (state.gratuity / 100);
    let taxTotal = state.total * (state.tax / 100);
    let totalSum = state.total + (tipTotal + taxTotal);
    setOpenCheckState({ ...openCheckState, grandTotal: totalSum });
  };

  return (
    <OrderContext.Provider
      value={{
        initialState,
        orderState,
        pastOrderState,
        createOrderClick,
        viewAllOrdersClick,
        updateIsOrderPaidClick,
        viewPastOrderState,
        viewOnePastOrder,
        productsState,
        addItemToCart,
        removeItemFromCart,
        decrementQuantity,
        handleInputChange,
        viewOneAppetizer,
        viewAppetizerState,
        calculateGrandTotal,
        resetTipMethod,
        openCheckState,
        handleTipChange,
        setOpenCheckState,
        tipMethodState,
        handleTipMethodChange,
        setOrderState,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
