import { useContext } from 'react';
import ProductOutTray from './vm-units/ProductOutTray';
import StoreFront from './vm-units/StoreFront';

const VMachineProductPart = ({allProducts, setDelevered}) => {
    
    return (
        <>
        <div>
            <div><StoreFront allProducts={allProducts} setDelevered={setDelevered}/></div>
            <div ><ProductOutTray /></div>
        </div>
        </>
    )
 }

 export default VMachineProductPart;