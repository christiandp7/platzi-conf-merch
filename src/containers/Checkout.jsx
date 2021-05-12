import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css'

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h3>ITEM Name</h3>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar Pedido</button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout
