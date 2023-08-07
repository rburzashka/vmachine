import ControlSlot from './vm-units/ControlSlot';
import Display from './vm-units/Display';
import MoneyTrayOut from './vm-units/MoneyTrayOut';
import MoneyTrayIn from './vm-units/MoneyTrayIn';
import VMContext from './vm-units/VMContext';

import React, {useContext, useState} from 'react';
import AppContext from './AppContext';

const VMachineControlsPart = ({}) => {
    const {vmState, setVMState, stateValues} = useContext(AppContext);
    
//setErrorMessage(prev => ({...prev, ...{text: "Unvalid code", code: "001"}}));
        
    const [pushedMoney, setPushedMoney] = useState(0.00);
    const [choosedProductCode, setChoosedProductCode] = useState('');
    const [change, setChange] = useState(0.00); 
    const [errorMessage, setErrorMessage] = useState({
        text: '',
        code: ''
    });

    return (
        
        
            <div>
                <VMContext.Provider value={
                        {   pushedMoney, setPushedMoney,
                            choosedProductCode, setChoosedProductCode,
                            errorMessage, setErrorMessage,
                            change, setChange }
                    }>
                    <div><MoneyTrayIn /> </div>
                    <div><Display /></div>
                    <div><ControlSlot /></div>
                    <div><MoneyTrayOut /></div>
                </VMContext.Provider>
            </div>
        
        
    )
 }

 export default VMachineControlsPart;