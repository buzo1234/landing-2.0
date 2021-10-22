function Seller() {
    return (
        <div className="flex justify-start items-center m-2 p-1 rounded-md cursor-pointer hover:bg-gray-100">
            <img src="https://res.cloudinary.com/dcyaz9xch/image/upload/v1634888585/mvsxjtg9fbgudfmukry3.jpg" alt="propfilepic" className="w-8 rounded-full" />
            <span className="mx-2 text-sm text-gray-400 italic"><b>Made By : </b>Seller Name</span>
            <span className=" justify-end text-xs text-gray-400 italic">--see other products</span>
        </div>
    )
}

export default Seller
