import ProductIcon from "./ProductIcon"

function Diwali() {
    return (
        <div className="flex w-full justify center items-center p-3 m-1  rounded-sm hover:bg-gray-100 ">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <p>Diyas:</p>
                </div>
                <div className="flex overflow-x-scroll">
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
