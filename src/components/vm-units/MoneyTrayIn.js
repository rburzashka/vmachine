import { useContext } from "react";
import VMContext from "./VMContext";
import AppContext from "../AppContext";

const MoneyTrayIn = () => {

    const {vmState, setVMState, stateValues, delevered, setDelevered} = useContext(AppContext);

    const { pushedMoney,
            setPushedMoney,
            setChange} = useContext(VMContext);
    
    const incrementMoney = (target, value) => {
        if(!target instanceof HTMLInputElement) {
            return;
        }

        if(delevered) {
            setDelevered(()=>false);
            setVMState(() => (stateValues.get("waiting")));
            setPushedMoney((prev) => (prev + value));
        } else if(vmState === stateValues.get("ready") && pushedMoney == 0.00) {
            setPushedMoney((prev) => (prev + value))
            setVMState(() => (stateValues.get("waiting")));
            setChange( () => 0.00)
        } else if(vmState === stateValues.get("waiting")) {
            setPushedMoney((prev) => (prev + value));
        } else {
            //TODO
            //Return money if any
        }

    }
    
    const handleSmallCoins = (e) => {
        incrementMoney(e.target, Number.parseFloat(e.target.value)/100);
      
    }
    const handleInputBigCoins = (e) => {
        incrementMoney(e.target, Number.parseFloat(e.target.value));
    }

    return (
        <>
            <p>EURO</p>
            
            <section id="money-tray-in">
                <div onClick={handleSmallCoins} data-coins="1" id="euro-cents">
                    <input value="10" type="button"/>
                    <input value="20" type="button"/>
                    <input value="50" type="button"/>
                </div>
                <div onClick={handleInputBigCoins} data-coins="2" id="euro">
                    <input value="1" type="button"/>
                    <input value="2" type="button"/>
                </div>
            </section>
        </>
    )
 }

 export default MoneyTrayIn;