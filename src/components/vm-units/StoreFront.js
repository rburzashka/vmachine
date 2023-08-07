import AppContext from "../AppContext";
import { useContext } from "react";

const StoreFront = ({allProducts, setDelevered}) => {

    const {productCode} = useContext(AppContext);

    

    if (!productCode) {
        return(<>The product out tray is empty</>);
    }

    const product = allProducts.find((el)=>{
        return el.code == productCode;
    });

    if (product) {
        setDelevered(true);
    } else {
        return(
            <p>Product not found</p>
        );
    }

    return (
        <section id="store-front">
            StoreFront
        {
            product && 
            <div>
                <p>Get your product</p>
                <p>
                    <b>{product.name} -</b>
                    <b>{product.code} -</b>
                    <b>{product.id}</b>
                </p>
            </div> 
        }
        </section>
    )
 }

 export default StoreFront;