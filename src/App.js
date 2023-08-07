import React, {useState} from 'react';

import Readme from './components/readme/Readme';
import './App.css'
import VMachineControlsPart from './components/VMachineControlsPart';
import VMachineProductPart from './components/VMachineProductPart';
import AppContext from './components/AppContext';
import ProductAddServiceTray from './components/vm-units/ProductAddServiceTray';

import FetchData from './components/FetchData';

export default function App() {

  const stateValues = new Map([
    ["ready", 200],
    ["waiting", 300],
    ["delivering", 400],
    ["service", 110],
    ["error", 100],
  ]);

  const [vmState, setVMState] = useState(stateValues.get('ready'));
  const [productCode, setProductCode] = useState('');
  const [allProducts, setAllProducts] = useState(null);
  const [delevered, setDelevered] = useState(false);

  const [availableCodes, setAvailableCodes] = useState(
    new Map([ ]));

  //setVMState(() => (stateValues.get("ready")));

  return (
    <>
      <h1>Combo Vending Machine</h1>
      <Readme />

      <section className='wrapper'>
        <section id="vm-module">
          <AppContext.Provider value={{
                                      vmState, setVMState, 
                                      stateValues,
                                      productCode, setProductCode,
                                      availableCodes, setAvailableCodes,
                                      allProducts, 
                                      delevered, setDelevered
                                      }}>
              <div className='front-part'>
                <VMachineProductPart allProducts={allProducts} setDelevered={setDelevered}/>
                <VMachineControlsPart />
              </div>

              <div className='back-part'>
                  <ProductAddServiceTray />
              </div>
      </AppContext.Provider>
          </section>

          <FetchData data={allProducts} setData={setAllProducts} setAvailableCodes={setAvailableCodes}/>

      </section>
    </>
  );
}

