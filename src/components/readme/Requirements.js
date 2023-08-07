const Requirements = () => {
    return (
        <>
            <section class="wrapper-readme">
            <header>
                <h1>I. Implementing a vending machine </h1>
            </header>
            <div>
                <h2>Specification</h2>
                <ul>
                    <li>Inventory size – up to 15 products of the same type</li>
                    <li>Price of products – should be different for each type</li>
                    <li>Use a currency of your choice, but please note the accepted coin denominations in a readme file. Make sure your vending machine accepts only the selected denominations</li>
                    <li>The machine must return change</li>
                    <li>Web Design - responsive</li>
                </ul>
            </div>

            <div>
                <h2>Operations</h2>
                <ul>
                    <li><b>Products</b> - Get initial products list data from external resource (mocked API created by you)</li>
                    <li><b>CRUD operations</b> for the products only in the application state (products data is not needed to be updated in the external resource)</li>
                    <li><b>Vending</b> – Insert coins, buy product, reset process (return the coins without purchase)</li>
                </ul>
            </div>

            <div>
                <h2>Used technologies</h2>
                <ul>
                    <li>No limitations</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Requirements;