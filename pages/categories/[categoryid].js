import Diwali from "../components/Diwali"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {useRouter} from 'next/router';
import { CartState } from "../../context/AppContext";
import {useEffect} from 'react';
import axios from "axios";
import Head from 'next/head';

function subcategories() {
    const {state : {products, loading}, dispatch,} = CartState();
    const router = useRouter();
    const takencategoryid = router.query.categoryid;

    useEffect(()=>{
        axios.get('https://karanmahesh.herokuapp.com/products')
        .then(response => {
            dispatch({
                type:"GET_PRODUCTS",
                payload:response.data
            })
            
        }).catch((err) => {
            console.log(err)
        })

    },[]);

    var categorydata = [];
    if(products){
    products.map((product) => {
        if(product.categoryid.categoryid === takencategoryid){
            categorydata.push(product);
        }
    })
    }

    var subcategorydatainitial = [];

    if(categorydata){
        categorydata.map((cat_data) => {
            subcategorydatainitial.push(cat_data.categoryid._id);
        })
    }

    var subcategorydata = [];

    if(subcategorydatainitial){
        var count = 0;
        var start = false;
          
        for (let j = 0; j < subcategorydatainitial.length; j++) {
            for (let k = 0; k < subcategorydata.length; k++) {
                if ( subcategorydatainitial[j] == subcategorydata[k] ) {
                    start = true;
                }
            }
            count++;
            if (count == 1 && start == false) {
                subcategorydata.push(subcategorydatainitial[j]);
            }
            start = false;
            count = 0;
        }
    }

    var subcategoryproductdata = [];

    var digit = 0;

    for(let i=0; i< subcategorydata.length; i++){
        var data = [];
        for(let j=0; j<categorydata.length; j++){
            if(subcategorydata[i] === categorydata[j].categoryid._id){
                if(digit===0){
                    data[digit] = categorydata[j].categoryid.subcategoryname;
                    digit = digit+1;
                    data[digit] = categorydata[j];
                    digit = digit +1;
                }
                else{
                    data[digit] = categorydata[j];
                    digit = digit +1;
                }
                
            }
            else continue;
        }
        digit=0;
        //console.log(data)
        subcategoryproductdata[i] = data;
    }

    //console.log(categorydata)

    return (
        <div> 
            <Head>
                <title>Porabay</title>
                <link rel="icon" href="/porabay-logo.jpg" />
            </Head>
            <Header/>
            <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center overflow-x-scroll w-full  my-2 p-2">
                
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
                <div className="flex justify-center items-center p-2 mx-1 rounded-md cursor-pointer bg-porabay text-white font-bold min-w-max text-sm">Category 1</div>
            </div>  
            <div className="flex p-3">
                <p>Category Name</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-2">
               {subcategoryproductdata.map((sub_data) => {
                   return(
                    <Diwali prod={sub_data} key={sub_data}/>
                   )
               })}
                
            </div>
            </div>
            <div><Footer/></div>
            
        </div>
    )
}

export default subcategories
