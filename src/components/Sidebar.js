import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBoxes, faShoppingCart, faUndo, faUsers, faTruck, faStore, faPuzzlePiece, faCalculator, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li style={{backgroundColor:"grey"}}><FontAwesomeIcon icon={faChartLine} /> Dashboard</li>
        <li><FontAwesomeIcon icon={faBoxes} /> Inventory</li>
        <li><FontAwesomeIcon icon={faShoppingCart} /> Order</li>
        <li><FontAwesomeIcon icon={faUndo} /> Returns</li>
        <li><FontAwesomeIcon icon={faUsers} /> Customers</li>
        <li><FontAwesomeIcon icon={faTruck} /> Shipping</li>
        <li><FontAwesomeIcon icon={faStore} /> Channel</li>
        <li><FontAwesomeIcon icon={faPuzzlePiece} /> Integrations</li>
        <li><FontAwesomeIcon icon={faCalculator} /> Calculators</li>
        <li><FontAwesomeIcon icon={faChartBar} /> Reports</li>
        <li><FontAwesomeIcon icon={faCog} /> Account</li>
      </ul>
    </div>
  );
};

export default Sidebar;
