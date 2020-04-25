import React, { createContext, useState, useEffect } from "react";
import API from "../API/API";

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
  const initialState = {
    order_items: [],
    total_items: 0,
    subtotal: 0,
    table_number: null,
    gratuity: 0,
    tax: 7.25,
    grand_total: 0,
  };

  const [tipMethodState, setTipMethodState] = useState({
    tipMethod: "radioTip",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openCheckState, setOpenCheckState] = useState({});
  const [errorState, setErrorState] = useState(null);
  const [pastOrderState, setPastOrderState] = useState([]);
  const [viewPastOrderState, setViewPastOrderState] = useState({});
  const [isPaidState, setIsPaidState] = useState(false);
  const [productsState, setProductsState] = useState([]);
  const [viewAppetizerState, setViewAppetizerState] = useState({});
  const [orderState, setOrderState] = useState(initialState);
  // const [dollarTipState, setDollarTipState] = useState(0);

  useEffect(() => {
    API.getProducts()
      .then((res) => {
        setProductsState(res.data);
      })
      .catch((err) =>
        setErrorState(`Request failed with status code: ${err.response.status}`)
      );
    setIsLoading(false);
  }, [isPaidState]);

  useEffect(() => {
    const subTotal = (array) => {
      let itemCount = 0;
      for (let i = 0; i < array.length; i++) {
        itemCount = itemCount + array[i].price * array[i].quantity;
      }
      setOrderState({
        ...orderState,
        subtotal: itemCount,
      });
    };
    subTotal(orderState.order_items);
    // eslint-disable-next-line
  }, [orderState.order_items]);

  useEffect(() => {
    calculateGrandTotal(openCheckState);
    // eslint-disable-next-line
  }, [openCheckState.gratuity]);

  const viewOneAppetizer = (id) => {
    let item = productsState.filter((product) => {
      return product.id === id;
    });
    item = item[0];
    setViewAppetizerState(item);
  };

  const viewOnePastOrder = (id) => {
    return API.viewPastOrder(id)
      .then((pastOrder) => setViewPastOrderState(pastOrder.data))
      .catch((err) =>
        setErrorState(`Request failed with status code: ${err.response.status}`)
      );
  };

  const resetTipMethod = () => {
    setTipMethodState({ tipMethod: "radioTip" });
  };

  const addItemToCart = (id) => {
    let item = productsState.filter((product) => {
      return product.id === id;
    });

    item = item[0];

    if (!item.quantity) {
      item.quantity = 1;
    } else {
      item.quantity++;
    }

    let orderItemsArray = orderState.order_items.filter((listItem) => {
      return listItem.product_id !== id;
    });
    setOrderState({
      ...orderState,
      order_items: [
        ...orderItemsArray,
        {
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
          product_name: item.product_name,
        },
      ],
    });
  };

  const removeItemFromCart = (id) => {
    if (!orderState.order_items.length) {
      setErrorState("Error: There are no items in cart");
    } else {
      let item = productsState.filter((product) => {
        return product.id === id;
      });
      item = item[0];

      item.quantity = 0;

      let arr = orderState.order_items.filter((listItem) => {
        return listItem.product_id !== id;
      });
      setOrderState({ ...orderState, order_items: [...arr] });
    }
  };

  const decrementQuantity = (id) => {
    let item = orderState.order_items.filter((product) => {
      return product.product_id === id;
    });
    item = item[0];
    if (item.quantity === 1) {
      return removeItemFromCart(id);
    } else {
      item.quantity--;
    }

    let arr = orderState.order_items.filter((listItem) => {
      return listItem.product_id !== id;
    });
    setOrderState({ ...orderState, order_items: [...arr, item] });
  };

  const updateIsOrderPaidClick = () => {
    return API.updateIsOrderPaid(
      openCheckState.id,
      openCheckState.order_items,
      openCheckState.total_items,
      openCheckState.table_number,
      openCheckState.subtotal,
      openCheckState.gratuity,
      openCheckState.tax,
      openCheckState.grand_total
    )
      .then(() => setIsPaidState(true))
      .then(() => setOpenCheckState({}))
      .catch((err) =>
        setErrorState(`Request failed with status code: ${err.response.status}`)
      );
  };

  const createOrderClick = () => {
    return API.createOrder(
      orderState.order_items,
      orderState.total_items,
      orderState.subtotal,
      orderState.table_number,
      orderState.gratuity,
      orderState.tax,
      orderState.grand_total
    )
      .then((res) => setOpenCheckState(res.data))
      .then(() => setIsPaidState(false))
      .catch((err) =>
        setErrorState(`Request failed with status code: ${err.response.status}`)
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderState({ ...orderState, [name]: value });
  };

  const handleTipChange = (event) => {
    const { name, value } = event.target;
    setOpenCheckState({ ...openCheckState, [name]: value });
  };

  // const handleDollarTipChange = (event) => {
  //   const { value } = event.target;
  //   setDollarTipState(value);
  // };

  const handleTipMethodChange = (event) => {
    const { name, value } = event.target;
    setTipMethodState({ [name]: value });
  };

  const viewAllOrdersClick = () => {
    return API.viewAllOrders()
      .then((res) => setPastOrderState(res.data))
      .catch((err) =>
        setErrorState(`Request failed with status code: ${err.response.status}`)
      );
  };

  const calculateGrandTotal = (state) => {
    let tipTotal = state.subtotal * (state.gratuity / 100);
    let taxTotal = state.subtotal * (state.tax / 100);
    let totalSum = state.subtotal + (tipTotal + taxTotal);
    setOpenCheckState({ ...openCheckState, grand_total: totalSum });
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
        errorState,
        setErrorState,
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
