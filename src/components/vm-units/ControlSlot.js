
import React, {useContext, useEffect} from "react";
import VMContext from "./VMContext";
import AppContext from "../AppContext";

const InputButtons = ({values})=> {
    const {vmState, stateValues} = useContext(AppContext);

    const isDisabled = !(vmState === stateValues.get("waiting"));

    return (
        values.map( (v)=> {
            return (
                <input key={v} disabled={isDisabled} value={v} type='button' />
            )
        })
    )
}

const ControlSlot = () => {
    const maxCodeLength = 2;

    const {vmState, setVMState, 
            stateValues, setProductCode,
            availableCodes} = useContext(AppContext);

    const { pushedMoney, setPushedMoney,
            choosedProductCode, setChoosedProductCode, 
            setChange,
    } = useContext(VMContext);
    
    const handleCodeNumberEntering = (e) => {

        if(!e.target instanceof HTMLInputElement) {
            return;
        }

        if( vmState === stateValues.get("waiting") ) {
            if (choosedProductCode.length < maxCodeLength ) {
                setChoosedProductCode((prev)=>(prev + e.target.value));
            }
        }
        
    }

    const reset = () => {
        setChoosedProductCode( ()=> ('') );
        setPushedMoney( () => (Number.parseFloat(0)));
    }

    const setChangeStates = (value) => {
        setChange( () => (value.toFixed(2)) );
    }

    const handleEnteredCodeProduct = (e) => {
        if(!e.target instanceof HTMLInputElement) {
            return;
        }
        if (e.target.dataset.value === 'true') {
            //check for availability
            if(availableCodes.has(choosedProductCode)) {
                //check is there enaught money in tray 
                if(pushedMoney >= availableCodes.get(choosedProductCode)) {
                    setProductCode(choosedProductCode);
                    //return change
                    setChangeStates(pushedMoney - availableCodes.get(choosedProductCode));
                    //start delivier
                    setVMState(() => (stateValues.get("delivering")));
                    //reset
                    reset();
                }
            } else {
                //return money
                setChangeStates(pushedMoney);
                //Reset
                reset();
                setVMState(() => (stateValues.get("ready")));
            }  

        } else if (e.target.dataset.value === 'false'){
            if (pushedMoney > 0.00) {
                //returm money
                setChangeStates(pushedMoney);
            }
            reset();
            setVMState(() => (stateValues.get("ready")));
        } else {
            //Unexpected result
        }
        
    }

    return (
        <>
        <p>Control slot</p>
        <section id="control-slot">
            <div onClick={handleCodeNumberEntering}>
                <InputButtons values={[1,2,3,4,5,6,7,8,9]} />
            </div>
            <div onClick={handleEnteredCodeProduct}>
                <button type='button' data-value={false}>Reset</button> 
                <button type='button' data-value={true}>Deliver</button>
            </div>
        </section></>
    )
 }

 export default ControlSlot;