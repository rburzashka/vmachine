import { useContext, useState } from "react";
import VMContext from "./VMContext";


const MoneyTrayOut = () => {
    const {change, setChange} = useContext(VMContext);

    return (
        <section id="money-tray-out">
            <p>
                <span>Change: </span>
                <span>{change} Euro</span>
            </p>
            <button type="button" onClick={() => {setChange(0.00)}}>Clear</button>
        </section>
    )
 }

 export default MoneyTrayOut;