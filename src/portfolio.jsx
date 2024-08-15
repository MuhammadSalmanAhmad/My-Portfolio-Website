import React from "react";

import './portfolio.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomerTable from "./customerTable.tsx";

export default function Portfolio() {
    return (
        <div className="Portfolio">
            <h1 >Portfolio</h1>
            
              <CustomerTable></CustomerTable>
            </div>
        
       
    )
}