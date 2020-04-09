import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { OrderContext } from "../../utils/context/OrderContext";

function ConfirmPaymentCard() {
    const { orderState } = useContext(OrderContext);

    return (
        <div>
            <Col lg={4}>
                <span>Grand Total: ${orderState.grandTotal}</span>
            </Col>
        </div>
    )
}

export default ConfirmPaymentCard;