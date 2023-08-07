import React, {useContext} from "react";
import VMContext from "./VMContext";

const Display = () => {

    const {pushedMoney, choosedProductCode} = useContext(VMContext);
    
    return (
        <section id="display">
            <p>
                <span className="text">Money in tray</span>
                <span className="result">{pushedMoney.toFixed(2) != 0.00 && pushedMoney.toFixed(2)}</span>
            </p>

            <p>
                <span className="text">Product code</span>
                <span className="result">{choosedProductCode}</span>
            </p>
        </section>
    )
 }

 export default Display;