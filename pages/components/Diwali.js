import ProductIcon from "./ProductIcon"

function Diwali() {
    return (
        <div className="flex w-full justify center items-center p-4 m-1 border-2 border-porabay rounded-xl">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <p>Diyas:</p>
                </div>
                <div className="flex overflow-x-scroll">
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                </div>
            </div>
        </div>
    )
}

export default Diwali
