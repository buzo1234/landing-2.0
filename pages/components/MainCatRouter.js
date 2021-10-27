import Router from "next/router"

function MainCatRouter({cat_id , cat_name}) {
    const categoryRouter = (id) => {
        Router.push(`/categories/${id}`)
    }
    return (
        <div onClick={() => categoryRouter(cat_id)}>
        <div className="inline-block justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold w-24 text-sm text-center">{cat_name}</div>
        </div>
    )
}

export default MainCatRouter
