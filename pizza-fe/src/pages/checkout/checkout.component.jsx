import React, { useContext } from "react";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

import { Table } from 'reactstrap';


const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);


  return (
    <main>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map(cartItem => 
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
          }
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL: ${cartTotal}</td>
          </tr>
        </tfoot>
      </Table>
      <StripeCheckoutButton price={cartTotal} />
    </main>
  );
};

export default CheckoutPage;