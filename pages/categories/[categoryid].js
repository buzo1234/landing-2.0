import Diwali from "../components/Diwali"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {useRouter} from 'next/router';
import { CartState } from "../../context/AppContext";
import {useEffect, useState} from 'react';
import axios from "axios";
import Head from 'next/head';
import MainCatRouter from "../components/MainCatRouter";

function subcategories() {
    const {state : {products}, dispatch,} = CartState();
    const router = useRouter();
    const takencategoryid = router.query.categoryid;
    const [maincategorydata, setMaincategorydata] = useState([]);
    const [load, setload] = useState(true);
    const [catname, setCatname] = useState("");

    useEffect(()=>{
        axios.get('https://localkamaal-backend.vercel.app/products')
        .then(response => {
            dispatch({
                type:"GET_PRODUCTS",
                payload:response.data
            })
            
        }).catch((err) => {
            console.log(err)
        })

    },[]);

    useEffect(() => {
        axios.get('https://localkamaal-backend.vercel.app/categories')
        .then(response => {
            setMaincategorydata(response.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    useEffect(() => {
        if(maincategorydata !== []){
            setload(false);
            maincategorydata.map((category_name) => {
                if(category_name._id === takencategoryid){
                    setCatname(category_name.categoryname)
                }
            })
        }
    },[router, maincategorydata])

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
        <div className="bg-offwhite"> 
            <Head>
                <title>LocalKamaal | {!load ? catname : ''}</title>
                <link rel="icon" href="/localkamaal.jpg" />
            </Head>
            <Header/>
            <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between overflow-x-scroll w-full  my-2 p-2">
                {!load ? (maincategorydata.map((maincat_data) => {
                    return(
                    <MainCatRouter cat_id={maincat_data._id} cat_name={maincat_data.categoryname}  />)
                })) : <h1 className="text-lg font-bold">Loading....</h1>}
            </div>  
            <div className="flex p-3">
                {!load ? <p className="font-bold underline text-lg">{catname}</p> : <p>Loading...</p>}
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
