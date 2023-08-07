export default function extract () {

    function getData(products = []) {
        return products.map(el => {
            return {code: el.code, id: el.id, name: el.name, price: el.price}
        });

    }

    function getCodePrice(products = []) {
        return new Map(products.map(el => {
            return [el.code, el.price]
        }))
    }

    return {
        getData,
        getCodePrice
    }
}