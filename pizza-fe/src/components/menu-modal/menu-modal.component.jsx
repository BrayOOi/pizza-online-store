import React, { useContext } from 'react';

import ModalForm from "../modal-form/modal-form.component";

import { CartContext } from "../../providers/cart/cart.provider";
import { MenuContext } from "../../providers/menu/menu.provider";

import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import "./menu-modal.styles.scss";


const MenuModal = () => {
  const { addItem } = useContext(CartContext);
  const { menuState, menuDispatch, menuOrder, menuSettings } = useContext(MenuContext);
  const { menu, order, modal } = menuState;
  const { isToggled } = modal;
  const { item, mapKey, totalPrice } = order;
  
  const toggleModal = () => menuDispatch({ type: "TOGGLE_MODAL" });

  const handleClick = () => {
    const addOnsList = menu[menuOrder.indexOf(menuSettings[menuOrder[mapKey]].triggerModal.addOns)];
    
    addItem({
      img_url: item.img_url,
      id: item.id,
      name: item.food_name,
      size: Object.keys(modal.size).filter(size => modal.size[size])[0],
      price: order.totalPrice,
      itemPrice: order.itemPrice,
      addOns: order.addOns.map(key => addOnsList[key]),
      groupId: menuOrder[mapKey]
    });
    toggleModal();
  };

  if (item) {
    const { food_name } = item;

    return (
      <Modal isOpen={isToggled} toggle={toggleModal} className="menu-modal">
        <ModalHeader toggle={toggleModal}>{ food_name }</ModalHeader>
        <ModalForm item={item} mapKey={mapKey} />
        <ModalFooter>
          { totalPrice === 0 ? null : <span>{ "$ " + totalPrice.toFixed(2) }</span> }
          <Button className="modal-button" onClick={ handleClick } disabled={totalPrice === 0}>Yes I want this!</Button>
        </ModalFooter>
      </Modal>
    );
  } else return null;
};

export default MenuModal;